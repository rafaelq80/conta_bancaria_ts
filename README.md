# Projeto Conta Bancária - POO - Typescript

<br />

<div align="center">
   <img src="https://i.imgur.com/izFuHID.png" title="source: imgur.com" width="25%"/>
</div>

<br /><br />

## Diagrama de Classes

```mermaid
classDiagram
class Conta {
  - numero : int
  - agencia : int
  - tipo : int
  - titular : string
  - saldo : float
  + int getNumero()
  + int getAgencia()
  + int getTipo()
  + string getTitular()
  + float getSaldo()
  + void setNumero(int numero)
  + void setAgencia(int agencia)
  + void setTipo(int tipo)
  + void setTitular(string titular)
  + void setSaldo(float saldo)
  + bool sacar(float valor)
  + void depositar(float valor)
  + void visualizar()
}
class ContaCorrente {
  - limite : float
  + float getLimite()
  + void setLimite(float limite)
  + bool sacar(float valor)
  + void visualizar()
}
class ContaPoupanca {
  - aniversario : int
  + int getAniversario()
  + void setAniversario(int aniversario)
  + void visualizar()
}
ContaCorrente --> Conta
ContaPoupanca --> Conta
```

<br /><br />

## Bibliotecas

- npm install -g typescript (tsc --init)
- npm install -g ts-node
- npm install prompt-sync
- npm install @types/prompt-sync
- npm install --save-dev @types/node
- npm install readline-sync

<br /><br />

## Print da Tela

<div align="center">
   <img src="https://i.imgur.com/MFK9yXB.png" title="source: imgur.com" width="90%"/>
</div>

