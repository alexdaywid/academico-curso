import { Router } from '@angular/router';
import { EstudanteService } from './../estudante.service';
import { Estudante } from './../estudante.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudante-list',
  templateUrl: './estudante-list.component.html',
  styleUrls: ['./estudante-list.component.css']
})
export class EstudanteListComponent implements OnInit {
  estudantes: Estudante[] = [];
  estudante: Estudante;
  btnDetailsList = {
    name : 'Novo estudante',
    link: 'estudante/new',
  };


  constructor(
    private estudanteService: EstudanteService,
    private router: Router,
    ) { }

  ngOnInit() {
   this.listarEstudante();
  }

  private listarEstudante() {
    return this.estudanteService.listarEstudante()
    .subscribe(estudante =>
     this.estudantes = this.getEstudantes(estudante),
    );
  }

  getEstudantes(estudantes: Estudante[]) {
    const lstEstudantes: Estudante[] = [];
    estudantes.forEach(e => {
      this.estudante = new Estudante(
        e.id,
        e.codigo,
        e.pessoa,
      );
      lstEstudantes.push(this.estudante);
    });
    return lstEstudantes;
  }

  excluirEstudante(estudante: Estudante){
    this.estudanteService.excluirEstudante(estudante.id)
    .subscribe(res => {
      this.listarEstudante();
      alert("Estudante excluido com sucesso.")
    });
  }

  // editarEstudante(estudante: Estudante){
  //   this.estudanteService.editarEstudante(estudante)
  //   .subscribe(res => {
  //     this.listarEstudante();
  //     alert("Estudante Atualizado com sucesso.")
  //   });
  // }

  editarEstudante(){
    alert("Funçao não foi implementada")
  }

  redirecionar(linkRouter: string , id: number) {
    this.router.navigateByUrl(linkRouter);
  }

}
