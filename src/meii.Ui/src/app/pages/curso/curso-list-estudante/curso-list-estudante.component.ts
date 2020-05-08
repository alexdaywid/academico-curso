import { Estudante } from './../../estudante/estudante.model';
import { Curso } from './../curso.model';
import { EstudanteService } from './../../estudante/estudante.service';
import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-list-estudante',
  templateUrl: './curso-list-estudante.component.html',
  styleUrls: ['./curso-list-estudante.component.css']
})
export class CursoListEstudanteComponent implements OnInit {
  cursosEstudante: Curso[] = [];
  curso: Curso;
  btnDetailsList = {
    name : 'Novo Curso',
    link: 'curso/new',
  };
  estudante: Estudante =  new Estudante();
  estudanteId: number
  constructor(
  private cursoService: CursoService,
  private estudanteService: EstudanteService,
  private router: Router) { }

ngOnInit() {
   this.estudanteId =  parseInt(localStorage.getItem('estudanteId'))
    this.buscarEstudanteMatriculaCurso(this.estudanteId);
}

private buscarEstudanteMatriculaCurso(estudanteId: number){
    this.cursoService.listaCursoMatriculaestudante(estudanteId)
    .subscribe(res =>{
      this.cursosEstudante = res;
    },error =>{
    })
}

}
