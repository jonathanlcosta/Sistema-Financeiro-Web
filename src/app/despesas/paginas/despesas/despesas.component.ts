import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/categorias/categorias.service';
import { MenuService } from 'src/app/shared/services/menu-service.service';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';
import { DespesasService } from '../../despesas.service';
import { DespesaRequest } from '../../models/despesa.request';
import { PaginacaoRequest } from 'src/app/shared/models/paginacao.request';
import { UsuarioListagemRequest } from 'src/app/usuarios/models/usuario.listagem.request';
import { PaginacaoResponse } from 'src/app/shared/models/paginacao.response';
import { UsuarioResponse } from 'src/app/usuarios/models/usuario.response';
import { CategoriaListagemRequest } from 'src/app/categorias/models/categoria.listagem.request';
import { CategoriaResponse } from 'src/app/categorias/models/categoria.response';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit{

  request: DespesaRequest;
  despesaForm : FormGroup;
  usuarioSelecionadoId: number;
  categoriaSelecionadoId: number;
  usuario: PaginacaoRequest<UsuarioListagemRequest>
  usuarios: PaginacaoResponse<UsuarioResponse>;
  categoria: PaginacaoRequest<CategoriaListagemRequest>;
  categorias: PaginacaoResponse<CategoriaResponse>;


constructor(public menuService: MenuService, public formBuilder: FormBuilder, 
  private readonly router: Router,
  private readonly categoriaService: CategoriasService,
  private readonly usuarioService: UsuariosService,
  private readonly service: DespesasService){}
  

ngOnInit(): void {
    this.menuService.menuSelecionado = 4;

    this.despesaForm = this.formBuilder.group
    (
      {
        Nome: ['', [Validators.required]],
        Valor: ['', Validators.required],
        DataVencimento: ['', Validators.required],
        
        IdUsuario: [this.usuarioSelecionadoId, [Validators.required]],
        IdCategoria: [this.categoriaSelecionadoId, [Validators.required]]
      }
    )
  }


}
