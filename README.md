# Biblioteca de Validação de Números de CPF Versão 1.0.0

Essa é uma biblioteca JavaScript de validação de números de CPF. Foram utilizados as seguintes dependências:

- Mocha
- Chai
- nyc (Istambul)

## Modo de instalar e usar

```
npm i cpf-number-validator-lib
```

```
const { cpfValidator } = require('cpf-number-validator-lib')
console.log(cpfValidator("130.663.590-00"))
// returns true
```

## Versão 1.0.0

- [x] Funcionalidade: verificação de números de CPF
- [x] Inclusão de função que verifica CPF com ou sem pontuação