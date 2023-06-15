import promptSync from "prompt-sync";
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

let contas: ContaController = new ContaController();

const leiaString = require('readline-sync');
const leia = promptSync();

let opcao, numero, agencia, tipo, saldo, limite, aniversario, numeroDestino: number;
let titular: string;

// let conta: Conta = new Conta(1, "123", 1, "João da Silva", 1000);
// conta.visualizar();
// conta.saldo = 2000;
// conta.titular = "Paulo da Silva";
// conta.sacar(500);
// conta.depositar(1000);
// conta.visualizar();

// let contacorrente: ContaCorrente = new ContaCorrente(1, "123", 1, "João da Silva", 1000, 100);
// contacorrente.visualizar();
// contacorrente.saldo = 1900;
// contacorrente.sacar(2000);
// contacorrente.depositar(1000);
// contacorrente.visualizar();

// let contapoupanca: ContaPoupanca = new ContaPoupanca(1, "123", 1, "João da Silva", 1000, 10);
// contapoupanca.visualizar();
// contapoupanca.saldo = 2000;
// contapoupanca.sacar(200);
// contapoupanca.depositar(1000);
// contapoupanca.visualizar();

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
contas.cadastrar(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
contas.cadastrar(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
contas.cadastrar(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
contas.cadastrar(cp2);

contas.listarTodas();

while (true) {

    console.log(colors.bg.black, colors.fg.yellow, "*****************************************************");
    console.log("                                                     ");
    console.log("                BANCO DO BRAZIL COM Z                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ",
        colors.reset);

    opcao = parseInt(leia("Entre com a opção desejada: "));

    if (opcao == 9) {
        console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
        sobre();
        console.log(colors.reset, "");
        process.exit(0);
    }

    switch (opcao) {
        case 1:
            console.log(colors.fg.whitestrong, "Criar Conta\n\n", colors.reset);

            agencia = parseInt(leia("Digite o Número da agência: "));
            titular = leiaString.question("Digite o Nome do titular: ");

            tipo = parseInt(leia("Digite o Tipo da Conta (1-CC/2-CP): "));

            saldo = parseInt(leia("Digite o Saldo da conta (R$): "));

            switch (tipo) {
                case 1:
                    limite = parseInt(leia("Digite o Limite da Conta (R$): "));
                    contas.cadastrar(
                        new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                    break;
                case 2:
                    aniversario = parseInt(leia("Digite o Dia do aniversário da Conta Poupança: "));
                    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo,
                        aniversario));
                    break;
            }

            keyPress();
            break;
        case 2:
            console.log(colors.fg.whitestrong, "Listar todas as Contas\n\n");

            contas.listarTodas();

            keyPress();
            break;
        case 3:
            console.log(colors.fg.whitestrong, "Consultar dados da Conta - por número\n\n");

            keyPress();
            break;
        case 4:
            console.log(colors.fg.whitestrong, "Atualizar dados da Conta\n\n");

            let conta: ContaPoupanca = new ContaPoupanca(4, 789, 2, "Juliana Ramos Silva", 1000, 15);
            contas.atualizar(conta);

            keyPress();
            break;
        case 5:
            console.log(colors.fg.whitestrong, "Apagar a Conta\n\n");

            numero = parseInt(leia("Digite o número da Conta: "));
            contas.deletar(numero);

            keyPress();
            break;
        case 6:
            console.log(colors.fg.whitestrong, "Saque\n\n");

            keyPress();
            break;
        case 7:
            console.log(colors.fg.whitestrong, "Depósito\n\n");

            keyPress();
            break;
        case 8:
            console.log(colors.fg.whitestrong, "Transferência entre Contas\n\n");

            keyPress();
            break;
        default:
            console.log(colors.fg.redstrong, "\nOpção Inválida!\n");
            keyPress();
            break;
    }
}


function sobre(): void {
    console.log("\n*********************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Rafael Queiróz - rafaelproinfo@gmail.com");
    console.log("github.com/rafaelq80");
    console.log("*********************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    leia("\nPressione enter para continuar...");
}
