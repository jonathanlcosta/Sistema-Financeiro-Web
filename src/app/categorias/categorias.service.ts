import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriaRequest } from './models/categoria.request';
import { Observable } from 'rxjs';
import { CategoriaResponse } from './models/categoria.response';

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
}
