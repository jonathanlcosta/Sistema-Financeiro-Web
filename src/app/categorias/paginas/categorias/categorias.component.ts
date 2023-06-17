import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu-service.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{

  constructor(private readonly menuService: MenuService){}
  
  ngOnInit(): void {
    this.menuService.menuSelecionado = 3;
  }
}
