import { Pedido } from './../pedido/pedido-model';
import { Cartao } from './../cartao/cartao.model';
import { Data } from '@angular/router';

export class Pagamento {
    constructor(
        public id?: number,
        public dataVencimento?: Data,
        public dataPagamento?: Data,
        public tipoPagamento?: TipoPagamento,
        public totalParcelas?: number,
        public pago?: boolean,
        public valorParcela?: number,
        public pedidoId?: number,
        public cartaoId?: number,
        public cartao?: Cartao[],
        public pedido?: Pedido,
    ) {}
}

export enum TipoPagamento {
    cartaocredito,
    boleto,
}
