
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoLogin } from 'src/app/core/services/autenticacao-login.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard {

  constructor(
    private router: Router,
    private LoginService: AutenticacaoLogin) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.LoginService.autenticado())
    {
      this.router.navigate(['Login']);
      return false;
    }
    else{
      return true;
    }
  }



}
