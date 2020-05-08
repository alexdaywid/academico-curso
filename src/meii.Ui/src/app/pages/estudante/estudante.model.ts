import { Pessoa } from '../model/pessoa.model';
export class Estudante {
    constructor(
        public id?: number,
        public codigo?: string,
        public pessoa?: Pessoa,
    ) {}
}