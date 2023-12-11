export class Livro {
  private _titulo: string;
  private _autor: string;
  private _anoPublicacao: number;
  
  constructor(titulo: string, autor: string, anoPublicacao: number) {
    this._titulo = titulo;
    this._autor = autor;
    this._anoPublicacao = anoPublicacao;
  }

  get titulo(): string {
    return this._titulo;
  }

  get autor(): string {
    return this._autor;
  }

  get anoPublicacao(): number {
    return this._anoPublicacao;
  }
  tituloLivro() {
    console.log(this._titulo);
  }
}
