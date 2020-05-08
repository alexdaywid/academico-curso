export class Matricula {
    constructor(
         public estudanteId: number,
         public cursoId: number,
         public codigo?: string,
         public dataduracao?: Date,
         public ativo?: boolean,
    ){}
}