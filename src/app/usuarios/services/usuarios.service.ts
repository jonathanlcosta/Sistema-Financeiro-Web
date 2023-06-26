import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginacaoRequest } from 'src/app/shared/models/paginacao.request';
import { environment } from 'src/environments/environment';
import { UsuarioListagemRequest } from '../models/usuario.listagem.request';
import { Observable } from 'rxjs';
import { PaginacaoResponse } from 'src/app/shared/models/paginacao.response';
import { UsuarioResponse } from '../models/usuario.response';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlBase = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  recuperar(request: PaginacaoRequest<UsuarioListagemRequest>): Observable<PaginacaoResponse<UsuarioResponse>> {
		return this.http.get<PaginacaoResponse<UsuarioResponse>>(
			this.urlBase + "Usuarios",
			{params: <any>request}
		);
	}
}
