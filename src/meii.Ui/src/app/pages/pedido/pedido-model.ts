import { Cartao } from './../cartao/cartao.model';
import { Pagamento } from './../model/pagamento.model';
import { Curso } from './../curso/curso.model';
export class Pedido {
    constructor(
        public id?: number,
        public codigo?: string,
        public dataGeracao?: Date,
        public status?: boolean,
        public estudanteId?: number,
        public valor?: number,
        public curso?: Curso[],
        public pagamento?: Pagamento[],
        public numeroParcela?: number,
        public valorParcela?: number,
        public cartaoCredito?: Cartao,
    ){}
}