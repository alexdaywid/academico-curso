import { EstudanteService } from './../../estudante/estudante.service';
import { Router } from '@angular/router';
import { Curso } from './../curso.model';
import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];
  curso: Curso;
  btnDetailsList = {
    name : 'Novo Curso',
    link: 'curso/new',
  };
  constructor(
    private cursoService: CursoService,
    private estudanteService: EstudanteService,
    private router: Router) { }

  ngOnInit() {
     this.listarTodosCurso();
  }

 

  private listarTodosCurso() {
    return this.cursoService.listarCurso()
    .subscribe(curso => {
      this.cursos = curso;
    }, erro => {
       alert('Erro ao carregar a lista de clientes');
    });
  }

  
  editarCurso(){
    alert("Funçao não foi implementada")
  }
  private fazerPedido(curso: Curso) {
    this.router.navigateByUrl(`pedido/new/${curso.id}`);
  }

}
