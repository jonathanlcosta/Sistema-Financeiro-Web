import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DespesaRequest } from './models/despesa.request';
import { Observable } from 'rxjs';
import { DespesaResponse } from './models/despesa.response';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  private urlBase = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

	inserir(request: DespesaRequest): Observable<DespesaResponse> {
		return this.http.post<DespesaResponse>(
			this.urlBase + "Despesas",
			request
		);
	}
}
