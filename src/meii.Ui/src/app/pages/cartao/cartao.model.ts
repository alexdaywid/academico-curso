import { Data } from '@angular/router';

export class Cartao {
    constructor(
        public id?: number,
        public titular?: string,
        public dataVencimento?: Data,
        public numero?: string,
        public codigoSeguranca?: number,
        public estudanteId?: number,
        public bandeiraCartao?: BandeiraCartao,
    ) {}
}

export enum BandeiraCartao {
    visa,
    masterCard,
    elo,
    hiperCard,
}