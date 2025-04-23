class Funcionario {
  constructor(nome, salario, dataAdmissao, bonus) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
    this.bonus = 0.1;
  }

  calcularBonus() {
    return this.salario * this.bonus;
  }

  exibirDetalhes() {
    console.log(
      `Funcionário: ${this.nome}, salário: R$${this.salario.toFixed(
        2
      )}, Data de admissão: ${
        this.dataAdmissao
      }, bônus: R$${this.calcularBonus().toFixed(2)}
      
      `
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, dataAdmissao, bonus, departamento) {
    super(nome, salario, dataAdmissao);
    this.bonus = 0.2;
    this.departamento = departamento;
  }

  exibirDetalhesGerente() {
    console.log(
      `Gerente: ${this.nome}, salário: R$${this.salario.toFixed(
        2
      )}, Data de admissão: ${
        this.dataAdmissao
      }, bônus: R$${this.calcularBonus().toFixed(2)}, departamento: ${
        this.departamento
      }
      
      `
    );
  }
}

const funcionario = new Funcionario("Pedro", 100, "01/08/2007");
const gerente = new Gerente("João", 1000, "09/02/1999", this.bonus, "Gerencia");
funcionario.exibirDetalhes();
gerente.exibirDetalhesGerente();
