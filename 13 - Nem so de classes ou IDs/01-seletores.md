# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos

* Element selector
    - Todos os elementos HTML
* ID selector    
    - Um elemento que tenha um atributo ```id```.
    - Cada id deverá ser único.
    - Forma de trabalhar no CSS: ```#title```    
* Class selector
    - Os elementos que contenha um atributo ```class```.
    - Podemos ter uma ou mais classes.
    - Forma de trabalhar no CSS: ```.red```
* Attribute selector
    - Um elemento que tenha um atributo específico.
    - Forma de trabalhar no CSS: ```[title]```
* Pseudo-class selector
    - Elementos em um estado específico. 
    - Forma de trabalhar no CSS: ```p:hover { color: red; }```

## Múltiplos

Você poderá selecionar múltiplos elementos e aplicar alguma regra CSS 
para todos eles.

Usamos uma separação por vírgulas para isso.

``` CSS
h1, p, a {
    color: red;
}
```
