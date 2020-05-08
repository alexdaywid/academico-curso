import { catchError, map } from 'rxjs/operators';
import { Pagamento } from './../model/pagamento.model';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
    // Headers
    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
      // tslint:disable-next-line:no-inferrable-types
      private baseUrl: string = environment.urlApi + 'pagamento';
      constructor(private http: HttpClient) { }

      public listarPagamento(): Observable<Pagamento[]> {
        return this.http.get(this.baseUrl)
        .pipe(
            map((pagamento) => pagamento),
            catchError(this.handleError),
        );
      }

      public buscarPagamentoId(pagamentoId: number ) {
        const url = `${this.baseUrl}/${pagamentoId}`;
        return this.http.get<Pagamento>(url).pipe(
          map(obj => obj),
          catchError((e) => this.handleError(e))
        );
      }
      public buscarPagamentoPorCpf(cpf: string ) {
        const url = `${this.baseUrl}/${cpf}`;
        return this.http.get<Pagamento>(url).pipe(
          map(obj => obj),
          catchError((e) => this.handleError(e))
        );
      }
    
      public editarPagamento(pagamento: Pagamento) {
        const url = `${this.baseUrl}/${pagamento.id}`;
        return this.http.put<Pagamento>(url, pagamento).pipe(
          map(obj => obj),
          catchError((e) => this.handleError(e))
        );
      }

      public EnviarEmailConfirmaPagamento(pagamento: Pagamento) {
        const url = `${this.baseUrl}/email-confirmacao-pagamento/${pagamento.id}`;
        return this.http.get<Pagamento>(url)
        .subscribe(res => {
          alert("Matricula realizada com sucesso finalizada com sucesso.");
        });
      }
      // Private método
      handleError(error: any): Observable<any> {
        alert('Erro ' + error);
        return (error);
      }
}
