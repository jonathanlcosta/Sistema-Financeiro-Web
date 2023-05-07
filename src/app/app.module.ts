import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './core/paginas/cadastro/cadastro.component';
import { LoginComponent } from './core/paginas/login/login.component';
import { CoreModule } from './core/core.module';
import { CoreRoutingModule } from './core/core-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
