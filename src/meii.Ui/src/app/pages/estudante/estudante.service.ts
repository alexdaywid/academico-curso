import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Estudante } from './estudante.model';


@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

    // Headers
 private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
  // tslint:disable-next-line:no-inferrable-types
  private baseUrl: string = environment.urlApi + 'estudante';

  constructor(private http: HttpClient) { }

  // Exemplo1:
  public listarEstudante(): Observable<Estudante[]> {
  console.log(this.baseUrl);
    return this.http.get(this.baseUrl)
    .pipe(
        map((estudante) => estudante),
        catchError(this.handleError),
    );
  }

  // public criarEstudantePessoaFisica(estudante: Estudante) {
  //   this.http.post<Estudante>(this.baseUrl, estudante, this.httpOptions)
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


  criarEstudantePessoaFisica(estudante: Estudante) {
    localStorage.clear();
    this.http.post<Estudante>(this.baseUrl, estudante, this.httpOptions)
    .subscribe(res => {
      let estudanteNovo: Estudante = res;
      localStorage.setItem('estudanteId', estudanteNovo.id.toString());
      alert('Salvo com sucesso');
    }, error =>  {
      this.handleError(error);
    });
  }

  // criarEstudantePessoaFisica (estudante: Estudante): Observable<Estudante> {
  //   const url = `${this.baseUrl}/cadastro-pessoa-fisica`;
  //   return this.http.post<Estudante>(this.baseUrl, estudante)
  //   .pipe(map((obj) => obj),
  //     catchError((e) => this.handleError(e))
  //   );
  // }


  public criarEstudantePessoaJuridica(estudante: Estudante) {
    return this.http.post<Estudante>(this.baseUrl + '/cadastro-pessoa-juridica', estudante).subscribe(res => {
      alert('teste');
    }, error =>{
      this.handleError(error);
    });
  }

  public buscarEstudanteId(estudanteId: number ) {
    const url = `${this.baseUrl}/${estudanteId}`;
    return this.http.get<Estudante>(url).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  public buscarEstudanteMatriculaCursoId(estudanteId: number ) {
    const url = `${this.baseUrl}/matricula-curso/${estudanteId}`;
    return this.http.get<Estudante>(url).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  public buscarEstudantePorCpf(cpf: string ) {
    const url = `${this.baseUrl}/${cpf}`;
    return this.http.get<Estudante>(url).pipe(
      map(obj => obj),
      // catchError((e) => this.handleError(e))
    );
  }

  public excluirEstudante(estudanteId: number) {
    const url = `${this.baseUrl}/${estudanteId}`;
    return this.http.delete<Estudante>(url).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  public editarEstudante(estudante: Estudante) {
    const url = `${this.baseUrl}/${estudante.id}`;
    return this.http.put<Estudante>(url, estudante).pipe(
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
