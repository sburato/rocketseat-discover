# Grid

* Posicionamento dos elementos dentro da caixa
* Posicionamento horizontal e vertical ao mesmo tempo
* Pode ser flexível ou fixo
* Cria espaços para os elementos filhos habitarem

```
## HTML ##

<body> 
  <header>Topo</header>
  <main>Conteúdo</main>
  <aside>Informações adicionais</aside>
  <footer>Rodapé</footer>  
</body>

## CSS ##
body {
  margin: 0;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
  grid-template-rows: 30px 1fr 40px;
  grid-template-columns: 1fr 80px
}
header {
  grid-area: header;
  background-color: green;
}
main {
  grid-area: main;
  background-color: red;
}
aside {
  grid-area: aside;
  background-color: blue;
}
footer {
  grid-area: footer;
  background-color: gray;
}
```