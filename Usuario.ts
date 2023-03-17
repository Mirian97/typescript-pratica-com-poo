export type TUsuario = {
  nome: string;
  email: string;
  senha: string;
};

export abstract class Usuario {
  nome: string;
  email: string;
  protected senha: string;
  protected logado: boolean;

  constructor({ nome, email, senha }: TUsuario) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.logado = false;
  }

  login(senha: string): boolean {
    if (senha === this.senha) {
      return (this.logado = true);
    }
    return (this.logado = false);
  }
}
