export class Endereco {
    constructor(
     public enderecoId: number,
     public logradouro: string,
     public numero: number,
     public complemento: string,
     public bairro: string,
     public cidade: string,
     public cep: string,
    ) {}
}