/* Primeira sequencia:
A lógica é que o próximo termo será obtido somando-se 2 ao termo anterior. 

const sequencia = [1, 3, 5, 7];

const ultimoTermo = sequencia[sequencia.length - 1];

const proximoTermo = ultimoTermo + 2;

console.log(proximoTermo); // O valor retornado será 9; */


/* Segunda sequência;
A lógica é que o próximo termo sempre será o dobro do anterior. 

const segundaSequencia = [2, 4, 8, 16, 32, 64];

const ultimoNumero = segundaSequencia[segundaSequencia.length - 1];

const proximoNumero = ultimoNumero * 2;

console.log(proximoNumero); // O valor retornado será 128; */


/* Terceira sequência;
A lógica por trás da sequência é que o número na lista é sempre o índice dele ao quadrado. Por exemplo, 2 ao quadrado é 4, 3 ao quadrado é 9, ..., 6 ao quadrado é 36 e por aí segue. 

const terceiraSequencia = [0, 1, 4, 9, 16, 25, 36];

const numeroFinal = terceiraSequencia[terceiraSequencia.length - 1];

const numeroProximo = (terceiraSequencia.length) ** 2;

console.log(numeroProximo) // O resultado será 49 que é 7 ao quadrado. */


/* Quarta sequência;
A lógica é que cada termo é ao quadrado de um número par, que começa em 2 e aumenta 2 em 2. 

let quartaSequencia = [4, 16, 36, 64];

let ultimoNumero = quartaSequencia[quartaSequencia.length - 1];

let proximoNumero = Math.pow(Math.sqrt(ultimoNumero) + 2, 2);

console.log(proximoNumero); // O resultado será 100, 10 ao quadrado. */


/* Quinta sequência;
A lógica é a sequência de Fibonacci, o próximo termo é a soma dos dois termos anteriores 

const fibonacci = [1, 1, 2, 3, 5, 8]

const penultimoTermo = fibonacci[fibonacci.length - 2];
const ultimoTermo = fibonacci[fibonacci.length - 1];

const proximoTermo = penultimoTermo + ultimoTermo;
console.log(proximoTermo); // O resultado será 13. */


/* Sexta sequência.
Acredito que não há uma lógica exata por trás dessa sequência, mas possui algumas propriedades:
O numero 12 é o menor numero divisivel por 2 e 3 ao mesmo tempo,
O numero 16 é o menor numero divisivel por 2 e 4 ao mesmo tempo e maior que o anterior (12)
O numero 17 é o menor numero primo maior que o anterior (16)
O numero 18 é o menor numero divisivel por 2 e 9 ao mesmo tempo e maior que o anterior (17)
19 é o menor numero primo maior que o anterior (18)
Portanto arrisco dizer que o próximo numero será 20, o menor numero divisivel por 2 e 10 e maior que o termo anterior (19) */