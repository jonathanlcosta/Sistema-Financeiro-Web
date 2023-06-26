import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriaRequest } from './models/categoria.request';
import { Observable } from 'rxjs';
import { CategoriaResponse } from './models/categoria.response';
import { PaginacaoRequest } from '../shared/models/paginacao.request';
import { CategoriaListagemRequest } from './models/categoria.listagem.request';
import { PaginacaoResponse } from '../shared/models/paginacao.response';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private urlBase = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

	inserir(request: CategoriaRequest): Observable<CategoriaResponse> {
		return this.http.post<CategoriaResponse>(
			this.urlBase + "Categorias",
			request
		);
	}

  recuperar(request: PaginacaoRequest<CategoriaListagemRequest>): Observable<PaginacaoResponse<CategoriaResponse>> {
		return this.http.get<PaginacaoResponse<CategoriaResponse>>(
			this.urlBase + "Categorias",
			{params: <any>request}
		);
	}
}
