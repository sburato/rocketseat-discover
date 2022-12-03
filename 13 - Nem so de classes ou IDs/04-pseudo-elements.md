# Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS.

`::pseudo-element-name`

## Exemplos

* ::before
* ::after
* ::first-line

```
* HTML

<li>Gratidão</li>
<li>Esperança</li>
<li>Fé</li>
<li>Liberdade</li>

* CSS

li {
  position: relative;
}

li::before {
  content: "";
  width: 10px;
  height: 1px;
  background-color: blue;
  position: absolute;
  bottom: 0px;
}

```

## Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements