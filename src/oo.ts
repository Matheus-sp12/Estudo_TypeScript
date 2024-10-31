class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
    }

    dizOI(): string {
        return `${this.nome} disse oi`
    }
}

class ContaBancaria {
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    getSaldo() {
        this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}