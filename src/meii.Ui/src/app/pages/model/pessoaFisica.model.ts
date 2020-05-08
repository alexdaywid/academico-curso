import { Endereco } from './endereco.model';
import { Pessoa } from './pessoa.model';

export class PessoaFisica {
    constructor(
        public cpf?: string,
        public rg?: string,
        public dtNascimento?: string,

    ) {}

    public verificarCpf(cpf: string): boolean {
        return cpf.length === 11 ? true : false;
    }
}