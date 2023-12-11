import { Carro } from './Carro';

export class Pessoa {
  private _nome: string;
  private _idade: number;
  private _profissao: string;
  private _carro: Carro; // Associação
  
  constructor(nome: string, idade: number, profissao: string, carro: Carro) {
    this._nome = nome;
    this._idade = idade;
    this._profissao = profissao;
    this._carro = carro; // Associação
  }

  get nome(): string {
    return this._nome;
  }

  get idade(): number {
    return this._idade;
  }

  get profissao(): string {
    return this._profissao;
  }

  get carro(): Carro {
    return this._carro;
  }
  nomePessoa() {
    console.log(this._nome);
  }
  acelerar() {
    return this._carro.acelerar();
  }
}
