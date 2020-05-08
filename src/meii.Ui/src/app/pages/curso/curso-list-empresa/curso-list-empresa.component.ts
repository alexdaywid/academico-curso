import { Curso } from './../curso.model';
import { Router } from '@angular/router';
import { EstudanteService } from './../../estudante/estudante.service';
import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-list-empresa',
  templateUrl: './curso-list-empresa.component.html',
  styleUrls: ['./curso-list-empresa.component.css']
})
export class CursoListEmpresaComponent implements OnInit {

  cursos: Curso[] = [];
  curso: Curso;
  btnDetailsList = {
    name : 'Novo Curso',
    link: 'curso/new',
  };
  constructor(
    private cursoService: CursoService,
    private estudanteService: EstudanteService
    ,
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

  excluirCurso(curso: Curso){
    this.cursoService.excluirCurso(curso.id)
    .subscribe(res => {
     this.listarTodosCurso();
      alert("Curso excluido com sucesso.")
    });
  }

  editarCurso(){
    alert("Funçao não foi implementada")
  }

  private fazerPedido(curso: Curso) {
    this.router.navigateByUrl(`pedido/new/${curso.id}`);
  }

}
