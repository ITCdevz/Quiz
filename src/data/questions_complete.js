const data = [
  {
    category: "PROGRAMAÇÃO GENÉRICA",
    questions: [
      {
        question: "O que é uma variável em programação?",
        options: [
          "Um comando para repetir ações",
          "Um valor fixo no código",
          "Um espaço de memória usado para armazenar dados",
          "Um erro de compilação",
        ],
        answer: "Um espaço de memória usado para armazenar dados",
      },
      {
        question: "Qual das opções representa um tipo de dado inteiro?",
        options: ["float", "int", "string", "boolean"],
        answer: "int",
      },
      {
        question: "O que o comando `if` faz em um programa?",
        options: [
          "Repete instruções até uma condição ser falsa",
          "Executa um bloco de código se uma condição for verdadeira",
          "Cria variáveis",
          "Exibe mensagens na tela",
        ],
        answer: "Executa um bloco de código se uma condição for verdadeira",
      },
      {
        question: "Qual a principal diferença entre os laços `for` e `while`?",
        options: [
          "O `for` é usado quando sabemos quantas vezes repetir",
          "O `while` sempre executa pelo menos uma vez",
          "O `for` não permite condições",
          "O `while` é mais rápido que o `for`",
        ],
        answer: "O `for` é usado quando sabemos quantas vezes repetir",
      },
      {
        question: 'Qual dessas expressões representa o "E" lógico?',
        options: ["||", "&&", "!=", "=="],
        answer: "&&",
      },
      {
        question: "Para que servem as funções em programação?",
        options: [
          "Para exibir mensagens na tela",
          "Para compilar o código",
          "Para organizar e reutilizar blocos de código",
          "Para definir variáveis",
        ],
        answer: "Para organizar e reutilizar blocos de código",
      },
      {
        question: "O que é escopo local de uma variável?",
        options: [
          "Variável que pode ser acessada de qualquer parte do programa",
          "Variável acessível apenas dentro da função ou bloco onde foi declarada",
          "Variável que pertence ao sistema operacional",
          "Variável que nunca muda de valor",
        ],
        answer:
          "Variável acessível apenas dentro da função ou bloco onde foi declarada",
      },
      {
        question: "Qual a finalidade de um array (vetor)?",
        options: [
          "Acelerar o desempenho do programa",
          "Armazenar vários valores em uma única variável",
          "Gerar erros intencionalmente",
          "Criar interfaces gráficas",
        ],
        answer: "Armazenar vários valores em uma única variável",
      },
      {
        question: "O que é um operador lógico?",
        options: [
          "Um símbolo usado para comparar expressões booleanas",
          "Um tipo de laço",
          "Um tipo de função matemática",
          "Um tipo de variável",
        ],
        answer: "Um símbolo usado para comparar expressões booleanas",
      },
      {
        question: "O que significa a instrução `return` em uma função?",
        options: [
          "Inicia uma repetição",
          "Declara uma variável",
          "Envia um valor de volta para quem chamou a função",
          "Pausa a execução do programa",
        ],
        answer: "Envia um valor de volta para quem chamou a função",
      },
      {
        question: "Qual a utilidade do comando `break` dentro de um laço?",
        options: [
          "Interromper a execução do laço",
          "Iniciar uma nova repetição",
          "Pular para o final da função",
          "Declarar uma nova variável",
        ],
        answer: "Interromper a execução do laço",
      },
      {
        question: "O que é um comentário no código?",
        options: [
          "Um trecho ignorado pelo compilador, usado para explicar o código",
          "Um erro que deve ser corrigido",
          "Uma linha que executa duas vezes",
          "Um tipo de variável",
        ],
        answer:
          "Um trecho ignorado pelo compilador, usado para explicar o código",
      },
      {
        question: "O que acontece se esquecer de inicializar uma variável?",
        options: [
          "Pode gerar erro ou comportamento inesperado",
          "A variável será automaticamente zero",
          "A variável funcionará normalmente",
          "O programa ignora essa variável",
        ],
        answer: "Pode gerar erro ou comportamento inesperado",
      },
      {
        question: "Qual é a finalidade de um laço `do...while`?",
        options: [
          "Repetir ações uma vez",
          "Garantir que o bloco de código seja executado pelo menos uma vez",
          "Substituir funções",
          "Declarar variáveis",
        ],
        answer:
          "Garantir que o bloco de código seja executado pelo menos uma vez",
      },
      {
        question: "Para que serve o comando `else`?",
        options: [
          "Declarar nova variável",
          "Executar um bloco de código quando a condição do `if` é falsa",
          "Parar um laço",
          "Comparar dois valores",
        ],
        answer: "Executar um bloco de código quando a condição do `if` é falsa",
      },
    ],
  },
  {
    category: "POO",
    questions: [
      {
        question: "Quais são os pilares da orientação a objetos?",
        options: [
          "Interface, template, indexação, encapsulamento",
          "Modularização, repetição, execução e visualização",
          "Abstração, encapsulamento, herança e polimorfismo",
          "For, if, else e switch",
        ],
        answer: "Abstração, encapsulamento, herança e polimorfismo",
      },
      {
        question: "O que é um objeto na programação orientada a objetos?",
        options: [
          "Uma instância de uma classe",
          "Um tipo de dado primitivo",
          "Um erro de compilação",
          "Um operador lógico",
        ],
        answer: "Uma instância de uma classe",
      },
      {
        question: "Qual a diferença entre herança e polimorfismo?",
        options: [
          "Herança permite que uma classe herde características de outra; polimorfismo permite múltiplas formas de um mesmo método",
          "Ambós servem para declarar variáveis",
          "Polimorfismo é apenas para arrays",
          "Herança cria loops recursivos",
        ],
        answer:
          "Herança permite que uma classe herde características de outra; polimorfismo permite múltiplas formas de um mesmo método",
      },
      {
        question: "O que é uma classe?",
        options: [
          "Um número inteiro",
          "Um laço de repetição",
          "Um molde para criar objetos",
          "Um tipo de variável booleana",
        ],
        answer: "Um molde para criar objetos",
      },
      {
        question: "O que é encapsulamento?",
        options: [
          "Esconder detalhes internos de uma classe e expor apenas o necessário",
          "Compartilhar atributos entre classes",
          "Criar várias classes no mesmo arquivo",
          "Tornar todos os atributos públicos",
        ],
        answer:
          "Esconder detalhes internos de uma classe e expor apenas o necessário",
      },
      {
        question: "Como se chama a função especial que inicializa objetos?",
        options: ["função", "construtor", "invocador", "importador"],
        answer: "construtor",
      },
      {
        question: "O que é herança múltipla?",
        options: [
          "Um objeto que herda múltiplos métodos",
          "Uma classe que herda de mais de uma classe (em linguagens que suportam)",
          "Uma função com muitos parâmetros",
          "Um método com várias saídas",
        ],
        answer:
          "Uma classe que herda de mais de uma classe (em linguagens que suportam)",
      },
      {
        question: "Qual o objetivo da palavra-chave `this`?",
        options: [
          "Encerrar um objeto",
          "Declarar variável",
          "Referenciar o próprio objeto dentro de seus métodos",
          "Criar nova classe",
        ],
        answer: "Referenciar o próprio objeto dentro de seus métodos",
      },
      {
        question: "O que é sobrecarga de métodos?",
        options: [
          "Erro por excesso de memória",
          "Criar vários métodos com o mesmo nome, mas parâmetros diferentes",
          "Repetição de código dentro de um método",
          "Um tipo de laço",
        ],
        answer:
          "Criar vários métodos com o mesmo nome, mas parâmetros diferentes",
      },
      {
        question: "Qual é o objetivo da herança?",
        options: [
          "Criar variáveis em massa",
          "Reutilizar código de uma classe base em subclasses",
          "Apagar atributos de um objeto",
          "Criar métodos aleatórios",
        ],
        answer: "Reutilizar código de uma classe base em subclasses",
      },
      {
        question: "O que define o comportamento de um objeto?",
        options: [
          "Seus atributos",
          "Seus métodos",
          "Sua classe pai",
          "Seu nome",
        ],
        answer: "Seus métodos",
      },
      {
        question: "O que é composição em orientação a objetos?",
        options: [
          "Fazer herança circular",
          "Juntar dois objetos em um",
          "Uma classe conter instâncias de outras classes",
          "Dividir uma classe em partes",
        ],
        answer: "Uma classe conter instâncias de outras classes",
      },
      {
        question: "O que representa um atributo privado?",
        options: [
          "Um atributo visível por qualquer classe",
          "Um atributo que não pode ser usado",
          "Um atributo acessível apenas dentro da própria classe",
          "Um atributo que pertence ao sistema",
        ],
        answer: "Um atributo acessível apenas dentro da própria classe",
      },
      {
        question: "Como garantir que uma classe não possa ser herdada?",
        options: [
          "Declarando como `base`",
          "Usando `static`",
          "Usando `final` (Java) ou `sealed` (C#)",
          "Tornando pública",
        ],
        answer: "Usando `final` (Java) ou `sealed` (C#)",
      },
      {
        question: "O que é um método abstrato?",
        options: [
          "Um método sem implementação que deve ser sobrescrito",
          "Um método que não retorna nada",
          "Um método executado automaticamente",
          "Um método apenas para leitura",
        ],
        answer: "Um método sem implementação que deve ser sobrescrito",
      },
    ],
  },
  {
    category: "JAVA",
    questions: [
      {
        question: "Qual é o método principal em um programa Java?",
        options: [
          "mainProgram()",
          "start()",
          "public static void main(String[] args)",
          "runMain()",
        ],
        answer: "public static void main(String[] args)",
      },
      {
        question: "Qual palavra-chave é usada para herança em Java?",
        options: ["inherit", "extends", "implements", "super"],
        answer: "extends",
      },
      {
        question: "Como declarar uma variável inteira em Java?",
        options: [
          "int numero = 5;",
          "num = 5;",
          "integer numero;",
          "numero = int(5);",
        ],
        answer: "int numero = 5;",
      },
      {
        question: "Qual biblioteca Java é usada para entrada via teclado?",
        options: [
          "System.text",
          "java.util.Scanner",
          "java.input.Scanner",
          "java.console.Input",
        ],
        answer: "java.util.Scanner",
      },
      {
        question: "O que significa a palavra-chave `static`?",
        options: [
          "Indica que o método ou atributo pertence à classe e não à instância",
          "Indica uma variável que muda de valor",
          "Define que o método é protegido",
          "Cria um novo objeto",
        ],
        answer:
          "Indica que o método ou atributo pertence à classe e não à instância",
      },
      {
        question: "Como criar um objeto a partir de uma classe `Carro`?",
        options: [
          "Carro();",
          "Carro meuCarro = new Carro();",
          "criar Carro = objeto();",
          "objeto Carro = new;",
        ],
        answer: "Carro meuCarro = new Carro();",
      },
      {
        question: "Qual é a função do `try/catch` em Java?",
        options: [
          "Fazer loops",
          "Capturar e tratar exceções (erros)",
          "Declarar variáveis",
          "Comentar blocos de código",
        ],
        answer: "Capturar e tratar exceções (erros)",
      },
      {
        question:
          "Qual estrutura é usada para selecionar entre múltiplas opções?",
        options: ["if-else apenas", "switch", "loop", "case-check"],
        answer: "switch",
      },
      {
        question: "O que representa `null` em Java?",
        options: [
          "Ausência de valor ou referência",
          "Um número negativo",
          "Um caractere invisível",
          "Um tipo de exceção",
        ],
        answer: "Ausência de valor ou referência",
      },
      {
        question: "Como se chama o processo de converter um tipo em outro?",
        options: ["Casting", "Folding", "Shifting", "Parsing"],
        answer: "Casting",
      },
      {
        question:
          "Qual modificador de acesso torna algo visível apenas no mesmo pacote?",
        options: [
          "public",
          "default (sem modificador)",
          "private",
          "protected",
        ],
        answer: "default (sem modificador)",
      },
      {
        question: "O que significa `final` em Java?",
        options: [
          "Impede alteração do valor ou herança",
          "Cria uma nova classe",
          "Finaliza o programa",
          "Permite herança múltipla",
        ],
        answer: "Impede alteração do valor ou herança",
      },
      {
        question: "Como declarar uma string em Java?",
        options: [
          'string nome = "Ana";',
          'String nome = "Ana";',
          'char nome = "Ana";',
          "nome = 'Ana';",
        ],
        answer: 'String nome = "Ana";',
      },
      {
        question: "Qual interface Java é usada para listas?",
        options: ["Array", "ArrayFixed", "List", "Storage"],
        answer: "List",
      },
      {
        question: "O que o compilador Java gera após compilar um `.java`?",
        options: [".exe", ".class", ".py", ".bat"],
        answer: ".class",
      },
    ],
  },
  {
    category: "ADSI",
    questions: [
      {
        question: "O que significa a sigla ADSI?",
        options: [
          "Análise de Dados e Sistemas Informáticos",
          "Análise e Desenvolvimento de Sistemas de Informação",
          "Aplicação de Desenvolvimento de Sistemas Integrados",
          "Análise de Documentação de Software e Internet",
        ],
        answer: "Análise e Desenvolvimento de Sistemas de Informação",
      },
      {
        question: "Qual é o objetivo da análise de requisitos?",
        options: [
          "Testar o software",
          "Compreender o que o sistema deve fazer",
          "Criar a interface do sistema",
          "Escolher a linguagem de programação",
        ],
        answer: "Compreender o que o sistema deve fazer",
      },
      {
        question: "O que é um diagrama de casos de uso?",
        options: [
          "Representa as interações entre usuários e o sistema",
          "Mostra a estrutura interna do banco de dados",
          "Representa o código-fonte",
          "Mostra erros do sistema",
        ],
        answer: "Representa as interações entre usuários e o sistema",
      },
      {
        question: "O que é um requisito funcional?",
        options: [
          "Um requisito que não depende do usuário",
          "Uma funcionalidade que o sistema deve ter",
          "Um problema do sistema",
          "Um padrão de design",
        ],
        answer: "Uma funcionalidade que o sistema deve ter",
      },
      {
        question: "O que é um requisito não funcional?",
        options: [
          "Um requisito relacionado a desempenho, segurança ou usabilidade",
          "Uma ação do usuário",
          "Uma rotina de backup",
          "Uma função do banco de dados",
        ],
        answer:
          "Um requisito relacionado a desempenho, segurança ou usabilidade",
      },
      {
        question: "Qual é a função do analista de sistemas?",
        options: [
          "Levantar requisitos e propor soluções técnicas",
          "Apenas programar sistemas",
          "Corrigir erros no banco de dados",
          "Controlar o tempo de execução",
        ],
        answer: "Levantar requisitos e propor soluções técnicas",
      },
      {
        question: "O que é um modelo Entidade-Relacionamento (MER)?",
        options: [
          "Representação gráfica da estrutura de um banco de dados",
          "Um algoritmo de ordenação",
          "Um tipo de diagrama de rede",
          "Um relatório de testes",
        ],
        answer: "Representação gráfica da estrutura de um banco de dados",
      },
      {
        question: "Qual ferramenta é frequentemente usada para diagramas UML?",
        options: ["SQL Server", "StarUML", "Linux", "MySQL"],
        answer: "StarUML",
      },
      {
        question: "O que representa um ator na UML?",
        options: [
          "Uma variável do sistema",
          "Um usuário ou sistema externo que interage com o sistema",
          "Uma classe abstrata",
          "Um método recursivo",
        ],
        answer: "Um usuário ou sistema externo que interage com o sistema",
      },
      {
        question: "O que é a fase de levantamento de requisitos?",
        options: [
          "Entendimento das necessidades do cliente",
          "Criação da base de dados",
          "Codificação do sistema",
          "Escolha da linguagem",
        ],
        answer: "Entendimento das necessidades do cliente",
      },
      {
        question:
          "Qual é a importância da documentação no desenvolvimento de sistemas?",
        options: [
          "Facilita a manutenção e entendimento do sistema",
          "Aumenta o tamanho do projeto",
          "Reduz a produtividade",
          "Garante desempenho",
        ],
        answer: "Facilita a manutenção e entendimento do sistema",
      },
      {
        question: "O que é prototipação?",
        options: [
          "Teste de desempenho",
          "Criação de uma versão preliminar do sistema para validação",
          "Compressão de código",
          "Estudo de mercado",
        ],
        answer: "Criação de uma versão preliminar do sistema para validação",
      },
      {
        question: "Em análise de sistemas, o que é viabilidade técnica?",
        options: [
          "Verificar se o sistema pode ser implementado com a tecnologia disponível",
          "Estimar os lucros do projeto",
          "Verificar erros do sistema",
          "Criar interface gráfica",
        ],
        answer:
          "Verificar se o sistema pode ser implementado com a tecnologia disponível",
      },
      {
        question: "Qual é o papel do diagrama de sequência?",
        options: [
          "Mostrar a ordem das interações entre objetos ou componentes do sistema",
          "Organizar o banco de dados",
          "Desenhar a interface",
          "Programar o back-end",
        ],
        answer:
          "Mostrar a ordem das interações entre objetos ou componentes do sistema",
      },
      {
        question: "O que define a arquitetura de software?",
        options: [
          "A linguagem de programação usada",
          "A estrutura geral e os componentes principais do sistema",
          "A aparência do sistema",
          "O código-fonte do frontend",
        ],
        answer: "A estrutura geral e os componentes principais do sistema",
      },
    ],
  },
];

export default data;
