import { Matricula } from './matricula,model';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
    // tslint:disable-next-line:no-inferrable-types
    private baseUrl: string = environment.urlApi + 'matricula';
    constructor(private http: HttpClient) { }

    public listarMatricula(): Observable<Matricula[]> {
      return this.http.get(this.baseUrl)
      .pipe(
          map((matricula) => matricula),
          catchError(this.handleError),
      );
    }

    public buscarMatriculaId(matriculaId: number ) {
      const url = `${this.baseUrl}/${matriculaId}`;
      return this.http.get<Matricula>(url).pipe(
        map(obj => obj),
        catchError((e) => this.handleError(e))
      );
    }

    public criarMatricula(matricula: Matricula) {
      return this.http.post<Matricula>(this.baseUrl, matricula).subscribe(res => {
        alert('O aluno foi matriculado com sucesso.');
      }, error =>{
        this.handleError(error);
      });
    }

    public buscarMatriculaPorCpf(cpf: string ) {
      const url = `${this.baseUrl}/${cpf}`;
      return this.http.get<Matricula>(url).pipe(
        map(obj => obj),
        catchError((e) => this.handleError(e))
      );
    }

    public editarMatricula(matricula: Matricula) {
      const url = `${this.baseUrl}/${matricula.estudanteId}`;
      return this.http.put<Matricula>(url, matricula).pipe(
        map(obj => obj),
        catchError((e) => this.handleError(e))
      );
    }

    public EnviarEmailConfirmaMatricula(matricula: Matricula) {
      const url = `${this.baseUrl}/email-confirmarcao-matricula/${matricula.estudanteId}`;
      return this.http.get<Matricula>(url).pipe(
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
