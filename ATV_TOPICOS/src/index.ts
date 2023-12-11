//Classe Principal

import { Carro } from "./models/Carro";
import { Pessoa } from "./models/Pessoa";
import { Livro } from "./models/Livro";

const carro1 = new Carro('Toyota', 'Corolla', 2022);
const carro2 = new Carro('Honda', 'Civic', 2023);
const carro3 = new Carro('Ford', 'Focus', 2021);

const pessoa1 = new Pessoa('João', 30, 'Engenheiro', carro1);
const pessoa2 = new Pessoa('Maria', 25, 'Designer', carro2);
const pessoa3 = new Pessoa('Carlos', 40, 'Professor', carro3);

const livro1 = new Livro('Aventuras de Sherlock Holmes', 'Arthur Conan Doyle', 1892);
const livro2 = new Livro('1984', 'George Orwell', 1949);
const livro3 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954);

// Imprimir os objetos
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);

console.log(livro1);
console.log(livro2);
console.log(livro3);

// Demonstrar polimorfismo
console.log(pessoa1.acelerar());
console.log(pessoa2.acelerar());
console.log(pessoa3.acelerar());

console.log(pessoa1.nomePessoa());
console.log(carro1.marcaCarro());
console.log(livro1.tituloLivro());

console.log(pessoa2.nomePessoa());
console.log(carro2.marcaCarro());
console.log(livro2.tituloLivro());

console.log(pessoa3.nomePessoa());
console.log(carro3.marcaCarro());
console.log(livro3.tituloLivro());