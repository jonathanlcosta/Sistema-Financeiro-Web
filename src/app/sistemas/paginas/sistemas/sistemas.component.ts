import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/shared/services/menu-service.service';
import { SistemaRequest } from '../../models/Sistema.request';
import { SistemaResponse } from '../../models/Sistema.response';
import { SistemasService } from '../../sistemas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.css']
})
export class SistemasComponent implements OnInit {
request: SistemaRequest;

  constructor(public menuService: MenuService, public formBuilder: FormBuilder, 
    private readonly service: SistemasService,
    private readonly router: Router) {
  }


  sistemaForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 2;

    this.sistemaForm = this.formBuilder.group
      (
        {
          Nome: ['', [Validators.required]]
        }
      )
  }

  enviar(): void {
    this.request = new SistemaRequest(this.sistemaForm.value);
    this.service.inserir(this.request).subscribe(
      (response: SistemaResponse) => {
        this.request = response;
        this.router.navigate(['/Home'])
      },
    );
  }

}
