import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu-service.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit{
constructor(private readonly menuService: MenuService){}
  

ngOnInit(): void {
    this.menuService.menuSelecionado = 4;
  }


}
