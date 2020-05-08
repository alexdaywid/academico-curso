import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from './../curso.service';
import { Curso } from './../curso.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {
  cursoform: FormGroup;
  curso: Curso = new Curso();
  btnDetailsForm = {
    name: 'Salvar',
    link: 'curso/new'
  };

  constructor(
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.criarCursoForm();
    const cursoId = +this.route.snapshot.paramMap.get('id');
    if (cursoId > 0) {
      this.buscarCursoPorId(cursoId);
    }
  }


  onSubmit($event) {
    if ($event === 'new') {
      this.curso = this.cursoform.value;
      this.newCurso(this.curso);
    } else {
    }
  }


  private criarCursoForm() {
    this.cursoform = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      datacadastro: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
      ativo: [null],
      valor: [null],
      cargaoHoraria: [null],
      // nivel: [null],
    });
  }

  newCurso(curso: Curso) {
    this.cursoService.criarCurso(curso);
  }

  buscarCursoPorId(cursoId: number) {
    this.cursoService.buscarCursoId(cursoId)
    .subscribe(curso => {
      this.popularCursoForm(curso);
    });
  }

  public popularCursoForm(curso: Curso) {
    this.cursoform.patchValue({
      id: curso.id,
      nome: curso.nome,
      datacadastro: curso.datacadastro,
      descricao: curso.descricao,
      ativo: curso.ativo,
      valor: curso.valor,
      cargaoHoraria: curso.cargaoHoraria,
      // nivel: curso.nivel,
      });
  }

}
