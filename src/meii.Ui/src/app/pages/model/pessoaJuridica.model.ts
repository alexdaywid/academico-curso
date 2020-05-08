import { Pessoa } from './pessoa.model';

export class PessoaJuridica {
    constructor(
        public nomeFantasia?: string,
        public cnpf?: string,
        public inscMunicipal?: string,
        public incsEstadual?: string
    ) {}

    public verificarCpf(cnpj: string): boolean {
        return cnpj.length === 14 ? true : false;
    }
}