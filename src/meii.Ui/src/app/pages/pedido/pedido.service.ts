import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from './pedido-model';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  // Headers
private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
  // tslint:disable-next-line:no-inferrable-types
  private baseUrl: string = environment.urlApi + 'pedido';

  constructor(private http: HttpClient) { }

  // Exemplo1:
  public listarPedido(): Observable<Pedido[]> {
    return this.http.get(this.baseUrl)
    .pipe(
        map((pedido) => pedido),
        catchError(this.handleError),
    );
  }

  criarPedido(pedido: Pedido) {
    this.http.post<Pedido>(this.baseUrl, pedido, this.httpOptions)
    .subscribe(res => {
      alert('Salvo com sucesso');
    }, error =>  {
      this.handleError(error);
    });
  }

  public buscarPedidoId(pedidoId: number ) {
    const url = `${this.baseUrl}/${pedidoId}`;
    return this.http.get<Pedido>(url).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  public editarPedido(pedido: Pedido) {
    const url = `${this.baseUrl}/${pedido.id}`;
    return this.http.put<Pedido>(url + '/' + pedido.id, pedido).pipe(
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
