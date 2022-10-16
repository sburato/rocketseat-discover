# Cascata (cascading)

    A escolha do browser de qual regra aplicar, no caso haja muitas regras para o mesmo elemento.

    * Seu estilo é lido de cima para baixo.

    É levado em consideração 3 fatores.

    1. Origem do estilo
    2. Especificidade
    3. Importância

### Origem do estilo

    inline > tag style > tag link

### Especificidade

    È um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

    0: Universal selector, combinators e negation pseudo-class (:not())    
        
        * {
            color: green;
        }    

    1: Element type selector e pseudo-elements (::before, ::after)

        body h1 {
            color: blue;  
        }

    10. Classes e atribute selectors ([type="radio"])

        .title {
            color: red;
        }

    100. ID selector

        #my-title,
        #my-title strong {
            color: gray;  
        }

    1000. Inline
        <h1 class="title" id="my-title" style="color: pink;">Título <strong>Alo</strong></h1>    

    
    A especificidade pode ser combinada        

        h1.title#my-title {
            color: blue;  
        }    

### A regra !important  

    * cuidado, evite o uso
    * não é considerado uma boa prática
    * quebra o fluxo natural da cascata
