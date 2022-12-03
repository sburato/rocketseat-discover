# Pseudo-classes

É um tipo de selector que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguido do nome do pseudo class
`:pseudo-class-name` 

## Selecionando elementos com pseudo-classes

* :first-child
* :nth-of-type
* :nth-child

### Exemplo:

``` 
* HTML

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>  
</ul> 

* CSS

ul li:nth-child(odd) {
  color: black;
  background: #eee;
}

ul li:nth-child(even) {
  color: gray;
}
```

## Ações do usuário

* :hover
* :focus

## Atributos

* :disabled
* :required

### Exemplo

```
* HTML

<input type="text" required>

* CSS

input:required {
  background-color: red;
}

input:focus {
  border-color: blue;
  outline: none;
}
```

## Referência
http://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
