import { TUsuario, Usuario } from "./Usuario";

export class Aluno extends Usuario {
  notas: number[];

  constructor(dadosUsuario: TUsuario) {
    super(dadosUsuario);
    this.notas = [];
  }

  calcularMedia(): number {
    let somaDeNotas = this.notas.reduce(
      (total, notaAtual) => total + notaAtual
    );
    return somaDeNotas / this.notas.length;
  }
}
