# Atribuindo mais estilos às fontes

## font-variant

* variações na apresentação da fonte

```css
p {
    font-variant: small-caps;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

---

## font-stretch

* alargamento ou encolhimento da fonte
* aceita palavra-chave como: expanded, condensed, normal
* aceita porcentagens de 50% a 200%

```css
p {
    font-stretch: expanded;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

---

## letter-spacing

* Espaços entre caracteres

```css
p {
    letter-spacing: 4px;
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

---

## word-spacing

* Espaços entre caracteres

```css
p {
    word-spacing: 4px
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing

---

## line-height

* Espaços entre linhas
* Pode ser com ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p {
    line-height: 1.6;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

---

## text-transform

* Transformação do texto

```css
p {
    text-transform: uppercase; /* capitalize | lowercase | none */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform

---

## text-decoration

* Aparência decorativa de um texto
* line: underline | overline | line-through (pode ser aplicado mais de um valor)
* style: wavy | dotted | double | dashed | solid
* color: `<color>` values

```css
p {
    text-decoration: underline; /* shorthand */
}
``` 

https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

---

# text-align

* Alinhamento de um texto

```css
p {
    text-align: center; /* left | right | center | justify */
}
``` 

https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

---

## text-shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```css
p {
    text-shadow: 1px 1px 1px red, 2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

---

## Shorthand

* font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family.

```css
p {
    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```

---

### Referência

https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals
