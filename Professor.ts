import { Aluno } from "./Aluno";
import { TUsuario, Usuario } from "./Usuario";

interface IProfessor {
  lancarNota(aluno: Aluno, nota: number): void;
}

export class Professor extends Usuario implements IProfessor {
  disciplina: string;

  constructor(dadosUsuario: TUsuario, disciplina: string) {
    super(dadosUsuario);
    this.disciplina = disciplina;
  }

  private verificarLogin(): void {
    if (!this.logado) {
      throw new Error("Professor não autenticado");
    }
  }

  lancarNota(aluno: Aluno, nota: number): void {
    this.verificarLogin();
    aluno.notas.push(nota);
  }
}
