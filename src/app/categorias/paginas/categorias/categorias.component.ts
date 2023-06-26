import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu-service.service';
import { CategoriaRequest } from '../../models/categoria.request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SistemasService } from 'src/app/sistemas/sistemas.service';
import { CategoriasService } from '../../categorias.service';
import { PaginacaoRequest } from 'src/app/shared/models/paginacao.request';
import { PaginacaoResponse } from 'src/app/shared/models/paginacao.response';
import { SistemaListagemRequest } from 'src/app/sistemas/models/sistema.listagem.request';
import { SistemaResponse } from 'src/app/sistemas/models/Sistema.response';
import { CategoriaResponse } from '../../models/categoria.response';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{
  request: CategoriaRequest;
  categoriaForm : FormGroup;
  sistemaSelecionadoId: number;
  sistema: PaginacaoRequest<SistemaListagemRequest>
  sistemas: PaginacaoResponse<SistemaResponse>;

  constructor(public menuService: MenuService, public formBuilder: FormBuilder, 
    private readonly sistemaService: SistemasService,
    private readonly router: Router,
    private readonly service: CategoriasService){}
  
  ngOnInit(): void {
    this.menuService.menuSelecionado = 3;
    this.recuperarSistemas();

    this.categoriaForm = this.formBuilder.group
    (
      {
        Nome: ['', [Validators.required]],
        IdSistemaFinanceiro: [this.sistemaSelecionadoId, [Validators.required]]
      }
    )
  }

  recuperarSistemas()
  {
    this.sistemaService.recuperar(this.sistema).subscribe((sistemas) =>
    this.sistemas = sistemas)
  };

  inserir(): void {
    this.request = new CategoriaRequest(this.categoriaForm.value);
    this.service.inserir(this.request).subscribe(
      (response: CategoriaResponse) => {
        this.request = response;
        this.request.IdSistemaFinanceiro = this.sistemaSelecionadoId;
        this.router.navigate(['/Home']);
      }
    );
}

}
