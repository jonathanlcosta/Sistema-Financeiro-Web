import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SistemaRequest } from './models/Sistema.request';
import { Observable } from 'rxjs';
import { SistemaResponse } from './models/Sistema.response';
import { PaginacaoRequest } from '../shared/models/paginacao.request';

@Injectable({
  providedIn: 'root'
})
export class SistemasService {

  private urlBase = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

	inserir(request: SistemaRequest): Observable<SistemaResponse> {
		return this.http.post<SistemaResponse>(
			this.urlBase + "SistemaFinanceiros",
			request
		);
	}

}
