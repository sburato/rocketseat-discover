## Background

- Define um fundo para o nosso elemento
- Sua área de atuação é a caixa toda
- Por padrão, é transparente

### Exemplos

- Usar cores solidas
- Usar imagens
- Controlar
    - a posição das imagens
    - se elas se repetem ou não
    - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente   

```
CSS

* {
  margin: 0;
}

header {
  height: 400px;
  padding: 16px;
  border: 7px dashed red;
  background-color: rgb(55, 100, 50);
  background-image: url(http://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  background-origin: content-box;
  background-clip: content-box;
  background-attachment: fixed; 
  background: linear-gradient(270deg, red, yellow); 
}
```