import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private readonly menuService: MenuService){}
  
  ngOnInit(): void {
    this.menuService.menuSelecionado = 1;
  }

}
