import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    public listarTodas(): void {
        this.listaContas.forEach(function (conta) {
            conta.visualizar();
        });
    }

    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }

    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta número: " + conta.numero + " foi criada com sucesso!", colors.reset);
    }

    atualizar(conta: Conta): void {
        let buscaConta: any = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA Conta numero: " + conta.numero + " foi atualizada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + conta.numero + " não foi encontrada!", colors.reset);
    }

    deletar(numero: number): void {
        let buscaConta: any = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
        	console.log(colors.fg.green,"\nA Conta numero: " + numero + " foi apagada com sucesso!", colors.reset);
        }else
        console.log(colors.fg.red,"\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    /*Métodos Auxiliares*/

    /*Gerar Número da Conta*/
    public gerarNumero(): number {
        return ++this.numero;
    }

    /*Checa se uma Conta existe*/
    public buscarNoArray(numero: number): Conta | null {
      
        for (let i=0; i < this.listaContas.length; i++){
            if (this.listaContas[i].numero === numero)
                return this.listaContas[i];
        }
     
        return null;
    }

    /*Checa o Tipo da Conta*/
    public retornaTipo(numero: number): number {
		for (let i=0; i < this.listaContas.length; i++) {
			if (this.listaContas[i].numero == numero) {
				return this.listaContas[i].tipo;
			}
		}
		
		return 0;
	}
}