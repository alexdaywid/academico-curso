import { Endereco } from './../../model/endereco.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EstudanteService } from './../estudante.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Estudante } from './../estudante.model';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa.model';

@Component({
  selector: 'app-estudante-form',
  templateUrl: './estudante-form.component.html',
  styleUrls: ['./estudante-form.component.css']
})
export class EstudanteFormComponent implements OnInit {

  estudanteform: FormGroup;
  numeroCpf: string;
  estudante: Estudante = new Estudante();
  btnDetailsForm = {
    name: 'Salvar',
    link: 'estudante/new'
  };
  Id: number; 
  constructor(
    private estudanteService: EstudanteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
   
    this.numeroCpf = this.route.snapshot.paramMap.get('numero');
    this.buscarEstudantePorCpf(this.numeroCpf);
    this.Id = +this.route.snapshot.paramMap.get('id');
    this.criarEstudanteForm();
    let estId = parseInt(localStorage.getItem('estudanteId'));
    if(estId> 0){
      this.buscarPorId(estId);
    }
   

  }

  onSubmit($event) {
    if ($event == 'new') {
      this.newEstudante();
    } else {
    }
  }

  private criarEstudanteForm() {
    this.estudanteform = this.formBuilder.group({
      id: [null],
      codigo: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      cpf: [this.numeroCpf],
      rg: [null],
      cnpj: [null],
      telResidencial: [null],
      endereco: [],
      telCelular: [null],
      dtNascimento: [null],
    });
  }

  public popularEstudanteForm(estudante: Estudante) {
    localStorage.setItem('estudanteId', estudante.id.toString());
    alert('estudanteId');
    this.estudanteform.patchValue({
        id: estudante.id,
        codigo: estudante.codigo,
        nome: estudante.pessoa.nome,
        email: estudante.pessoa.email,
        cpf: estudante.pessoa.cpf,
        rg: estudante.pessoa.rg,
        cnpj: estudante.pessoa.cnpj,
        telResidencial: estudante.pessoa.telefoneFixo,
        endereco: [],
        telCelular: estudante.pessoa.telefoneCelular,
        dtNascimento: estudante.pessoa.dtNascimento,
      });
  }

  private newEstudante() {
    const endereco1: Endereco[] = [];
    const estudante: Estudante = new Estudante();
    estudante.codigo =  this.estudanteform.get('codigo').value,
    estudante.pessoa = new Pessoa(
      null,
      this.estudanteform.get('nome').value,
      this.estudanteform.get('email').value,
      this.estudanteform.get('telResidencial').value,
      this.estudanteform.get('telCelular').value,
      endereco1,
      this.estudanteform.get('cpf').value,
      this.estudanteform.get('rg').value,
      // this.estudanteform.get('cnpj').value,
      this.estudanteform.get('dtNascimento').value,
      // this.estudanteform.get('nomeFantasia').value,
      // this.estudanteform.get('inscMunicipal').value,
      // this.estudanteform.get('inscEstadual').value,
    );

    this.criarEstudante(estudante, 0);
  }

  public buscarPorId(estudanteId: number) {
   return this.estudanteService.buscarEstudanteId(estudanteId)
    .subscribe(estudante => {
      this.popularEstudanteForm(estudante);
    });

  }

  public buscarEstudantePorCpf(cpf: string) {
    if(cpf !== null){
      return this.estudanteService.buscarEstudantePorCpf(cpf)
      .subscribe(estudante =>  {
        this.popularEstudanteForm(estudante);
      });
    }
   }

  public criarEstudante(estudante: Estudante , tipoPessoa: number) {
    const tipopessoa = 0;
      this.estudanteService.criarEstudantePessoaFisica(estudante);
  }

   editarEstudante(estudante: Estudante){
    this.estudanteService.editarEstudante(estudante)
    .subscribe(res => {
      alert("Estudante Atualizado com sucesso.")
    });
  }


}
