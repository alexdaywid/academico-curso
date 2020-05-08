import { Data } from '@angular/router';


export class Curso {
    constructor(
        public id?: number,
        public nome?: string,
        public datacadastro?: Data,
        public descricao?: string,
        public ativo?: boolean,
        public valor?: number,
        public cargaoHoraria?: number,
        public nivel?: Nivel,
    ){}
}

export enum Nivel {
    basico,
    intermediario,
    avancado,
}