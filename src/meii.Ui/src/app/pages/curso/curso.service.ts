import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Curso } from './curso.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

// Headers
private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
  // tslint:disable-next-line:no-inferrable-types
  private baseUrl: string = environment.urlApi + 'curso';

  constructor(private http: HttpClient) { }

  // Exemplo1:
  public listarCurso(): Observable<Curso[]> {
    return this.http.get(this.baseUrl)
    .pipe(
        map((curso) => curso),
        catchError(this.handleError),
    );
  }

  public listaCursoMatriculaestudante(estudanteid: number): Observable<Curso[]> {
    const url = `${this.baseUrl}/curso-matricula-estudante/${estudanteid}`;
    return this.http.get(url)
    .pipe(
        map((curso) => curso),
        catchError(this.handleError),
    );
  }

  criarCurso(curso: Curso) {
    this.http.post<Curso>(this.baseUrl, curso, this.httpOptions)
    .subscribe(res => {
      alert('Salvo com sucesso');
    }, error =>  {
      this.handleError(error);
    });
  }

  public buscarCursoId(cursoId: number ) {
    const url = `${this.baseUrl}/${cursoId}`;
    return this.http.get<Curso>(url).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  public editarCurso(curso: Curso) {
    const url = `${this.baseUrl}/${curso.id}`;
    return this.http.put<Curso>(url + '/' + curso.id, curso).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  public excluirCurso(cursoId: number) {
    const url = `${this.baseUrl}/${cursoId}`;
    return this.http.delete<Curso>(url).pipe(
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
