import { Pessoa } from '../model/pessoa.model';
export class Cliente {
    constructor(
        public clienteId?: number,
        public codigo?: string,
        public pessoa?: Pessoa,
    ) {}
}




