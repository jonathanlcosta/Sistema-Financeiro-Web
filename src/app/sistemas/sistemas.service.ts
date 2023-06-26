import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SistemaRequest } from './models/Sistema.request';
import { Observable } from 'rxjs';
import { SistemaResponse } from './models/Sistema.response';
import { PaginacaoRequest } from '../shared/models/paginacao.request';
import { SistemaListagemRequest } from './models/sistema.listagem.request';
import { PaginacaoResponse } from '../shared/models/paginacao.response';

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

	recuperar(request: PaginacaoRequest<SistemaListagemRequest>): Observable<PaginacaoResponse<SistemaResponse>> {
		return this.http.get<PaginacaoResponse<SistemaResponse>>(
			this.urlBase + "SistemaFinanceiros",
			{params: <any>request}
		);
	}
}
