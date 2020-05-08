import { Endereco } from './endereco.model';
export class Pessoa {
    constructor(
        public pessoaId?: number,
        public nome?: string,
        public email?: string,
        public telefoneFixo?: string,
        public telefoneCelular?: string,
        public endereco?: Endereco[],
        public cpf?: string,
        public rg?: string,
        public dtNascimento?: string,
        public nomeFantasia?: string,
        public cnpj?: string,
        public inscMunicipal?: string,
        public inscEstadual?: string
    ) {}
}