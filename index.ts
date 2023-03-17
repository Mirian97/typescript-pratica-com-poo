import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

const guido = new Professor(
  {
    nome: "Guido",
    email: "guido@cubos.com",
    senha: "12345",
  },
  "back-end"
);

const juninho = new Aluno({
  nome: "Guido",
  email: "guido@cubos.com",
  senha: "123456",
});

// console.log(guido.lancarNota(juninho, 10));
console.log(guido.login("12345"));
guido.lancarNota(juninho, 9);
guido.lancarNota(juninho, 10);
console.log(juninho.notas);
console.log(juninho.calcularMedia());
