## Display: block vs inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

**block** 

- Ocupa toda a linha, colocando o próximo elemento abaixo desse.
- As propriedades width e height são respeitadas.
- padding, margin, boder irão funcionar normalmente           

**inline**

- Elemento ao lado do outro.
- As propriedades width e heigth não funcionam.
- Somente valores horizontais de margin, padding e border.

Exemplos

block: `<p> <div> <section>`, todos os headings `<h1> <h2>...` 

inline: `<a> <strong> <span> <em> `