# Tipos de dados

* Gramática
    * Elementos da linguagem e suas combinações
    * A arte de falar e escrever corretamente

* Vocabulário
    * Conjunto de termos e expressões
    * Agrupamento de palavras

* Precisamos saber como escrever
* Precisamos saber os significados
* Precisamos continuar aprendendo, para crescer nosso vocabulário

* Como vai ser a dinâmica do aprendizado?
    * Conceitos e escrita
    > Vamos aprender os tipos de dados mais utlizados na linguagem
    * Você sabia que é possível aprender 80% de uma língua nova, com cerca de 20% do vacabulário? (ou até menos)

* Conforme o ECMAScript standard (padrão para o JavaScript) temos 9 tipos de dados:

* Data types
    * Primitive / Primitive value
    * Structural
    * Structural Primitive

## Primitivos

* String
* Number
* Boolean
* undefined
* Symbol
* BigInt

## Estruturais

* Object
    * Array
    * Map
    * Set
    * Date
    * ...
* Function

## Primitivo Estrutural ou Structural Root Primitive

* null

### String

* Cadeia de caracteres
* "" // aspas duplas
* '' // aspas simples
* `` // template literals ou template strings

### Number

* Números
* 33       // inteiros
* 12.5     // reais
* NaN      // not a number
* Infinity // infinito

### Boolean

* Somente 2 valores
* true  // verdadeiro
* false // falso

### Undefined

* Indefinido
* Não existe

### Null    

* nulo
* objeto que não possui nada dentro
* diferente de indefinifo

### Object

* Objeto
* Propriedades ou atributos
* Funcionalidades ou métodos
* Exemplo: { propriedade: "valor" }

```
console.log({
  name: "Silvano",
  idade: 38,
  andar: () => { console.log("Andar"); }
});
```

### Array (vetores)

* Uma lista
* Agrupamento de dado
* Exemplo: ["Silvano", 38]

```
console.log([
  "Leite",
  "Ovos",
  "Macarrão"
]);
```