import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, retry} from 'rxjs/operators';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

   // Headers
 private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
  // tslint:disable-next-line:no-inferrable-types
  private baseUrl: string = environment.urlApi + 'cliente';

  constructor(private http: HttpClient) { }

  // Exemplo1:
  public listarCliente(): Observable<Cliente[]> {
    return this.http.get(this.baseUrl)
    .pipe(
        map((cliente) => cliente),
        catchError(this.handleError),
    );
  }

  // public criarClientePessoaFisica(cliente: Cliente) {
  //   this.http.post<Cliente>(this.baseUrl, cliente, this.httpOptions)
  //   .subscribe(res => {
  //     alert(res)
  //   }, erro => {
  //   });
  // }
  // create(product: Product): Observable<Product> {
  //   return this.http.post<Product>(this.baseUrl, product).pipe(
  //     map((obj) => obj),
  //     catchError((e) => this.errorHandler(e))
  //   );
  // }


  criarClientePessoaFisica(cliente: Cliente) {
    this.http.post<Cliente>(this.baseUrl, cliente, this.httpOptions)
    .subscribe(res => {
      alert('Salvo com sucesso');
    }, error =>  {
      this.handleError(error);
    });
  }

  // criarClientePessoaFisica (cliente: Cliente): Observable<Cliente> {
  //   const url = `${this.baseUrl}/cadastro-pessoa-fisica`;
  //   return this.http.post<Cliente>(this.baseUrl, cliente)
  //   .pipe(map((obj) => obj),
  //     catchError((e) => this.handleError(e))
  //   );
  // }


  public criarClientePessoaJuridica(cliente: Cliente) {
    return this.http.post<Cliente>(this.baseUrl + '/cadastro-pessoa-juridica', cliente).subscribe(res => {
      alert('teste');
    }, error =>{
      this.handleError(error);
    });
  }

  public buscarClienteId(clienteId: number ) {
    const url = `${this.baseUrl}/${clienteId}`;
    return this.http.get<Cliente>(url).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  public editarCliente(cliente: Cliente) {
    const url = `${this.baseUrl}/${cliente.clienteId}`;
    return this.http.put<Cliente>(url + '/' + cliente.clienteId, cliente).pipe(
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
