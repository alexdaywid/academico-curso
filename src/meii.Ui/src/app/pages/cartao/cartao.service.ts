import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cartao } from './cartao.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {
  // Headers
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
    // tslint:disable-next-line:no-inferrable-types
    private baseUrl: string = environment.urlApi + 'cartao';
    constructor(private http: HttpClient) { }
    // Exemplo1:
    public listarCartao(): Observable<Cartao[]> {
      return this.http.get(this.baseUrl)
      .pipe(
          map((cartao) => cartao),
          catchError(this.handleError),
      );
    }

    criarCartao(cartao: Cartao) {
      this.http.post<Cartao>(this.baseUrl, cartao, this.httpOptions)
      .subscribe(res => {
        alert('Salvo com sucesso');
      }, error =>  {
        this.handleError(error);
      });
    }

    public buscarCartaoId(cartaoId: number ) {
      const url = `${this.baseUrl}/${cartaoId}`;
      return this.http.get<Cartao>(url).pipe(
        map(obj => obj),
        catchError((e) => this.handleError(e))
      );
    }

    public buscarCartaoEstudantePorId(estudanteId): Observable<Cartao[]> {
      const url = `${this.baseUrl}/estudante/${estudanteId}`;
      return this.http.get(url)
      .pipe(
          map((cartao) => cartao),
          catchError(this.handleError),
      );
    }

    public editarCartao(cartao: Cartao) {
      const url = `${this.baseUrl}/${cartao.id}`;
      return this.http.put<Cartao>(url + '/' + cartao.id, cartao).pipe(
        map(obj => obj),
        catchError((e) => this.handleError(e))
      );
    }

    public excuirCartao(cartaoId: number) {
      const url = `${this.baseUrl}/${cartaoId}`;
      return this.http.delete<Cartao>(url).pipe(
        map(obj => obj),
        catchError((e) => this.handleError(e))
      );
    }
    // Private método
    handleError(error: any): Observable<any> {
      alert('Erro ' + error);
      return (error);
    }
}
