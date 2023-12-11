export class Veiculo {
  private _marca: string;
  private _modelo: string;
  private _ano: number;
  
  constructor(marca: string, modelo: string, ano: number) {
    this._marca = marca;
    this._modelo = modelo;
    this._ano = ano;
  }

  get marca(): string {
    return this._marca;
  }

  get modelo(): string {
    return this._modelo;
  }

  get ano(): number {
    return this._ano;
  }
  marcaCarro() {
    console.log(this._marca);
  }
  acelerar() {
    return 'O veículo está acelerando';
  }
}