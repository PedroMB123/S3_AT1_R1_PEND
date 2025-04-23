// Classe base que representa um funcionário comum
class Funcionario {
  // Construtor: inicializa o objeto com nome, salário, data de admissão e bônus fixo
  constructor(nome, salario, dataAdmissao, bonus) {
    this.nome = nome; // Nome do funcionário
    this.salario = salario; // Salário base
    this.dataAdmissao = dataAdmissao; // Data de admissão na empresa
    this.bonus = 0.1; // Bônus padrão de 10% (valor fixo)
  }

  // Método para calcular o valor do bônus com base no salário
  calcularBonus() {
    return this.salario * this.bonus; // Retorna o bônus (10% do salário)
  }

  // Método para exibir as informações do funcionário no console
  exibirDetalhes() {
    console.log(
      `Funcionário: ${this.nome}, salário: R$${this.salario.toFixed(
        2
      )}, Data de admissão: ${
        this.dataAdmissao
      }, bônus: R$${this.calcularBonus().toFixed(2)}\n`
    );
  }
}

// Classe derivada que representa um gerente, herda de Funcionario
class Gerente extends Funcionario {
  // Construtor: chama o construtor da classe base e adiciona o departamento e um bônus maior
  constructor(nome, salario, dataAdmissao, bonus, departamento) {
    super(nome, salario, dataAdmissao); // Chama o construtor da classe funcionario
    this.bonus = 0.2; // Sobrescreve o bônus para 20% (específico de gerentes)
    this.departamento = departamento; // Departamento que o gerente lidera
  }

  // Método específico para exibir os detalhes de um gerente
  exibirDetalhesGerente() {
    console.log(
      `Gerente: ${this.nome}, salário: R$${this.salario.toFixed(
        2
      )}, Data de admissão: ${
        this.dataAdmissao
      }, bônus: R$${this.calcularBonus().toFixed(2)}, departamento: ${
        this.departamento
      }\n`
    );
  }
}

// Criação de um funcionário comum
const funcionario = new Funcionario("Pedro", 100, "01/08/2007");

// Criação de um gerente (o parâmetro bonus é ignorado, pois é fixo na classe)
const gerente = new Gerente("João", 1000, "09/02/1999", null, "Gerencia");

// Chamada do método que mostra os dados do funcionário
funcionario.exibirDetalhes();

// Chamada do método que mostra os dados do gerente
gerente.exibirDetalhesGerente();
