import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu-service.service';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.css']
})
export class SistemasComponent implements OnInit {

  constructor(private readonly menuService: MenuService){}
  
  ngOnInit(): void {
    this.menuService.menuSelecionado = 2;
  }

}
