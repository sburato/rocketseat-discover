# At-rules

    * Está relacionado ao comportamento do CSS
    * Começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns

    - @import       /* incluir um CSS externo */

    - @media        /* regras condicionais para dispositivos */

    - @font-face    /* fontes externas */

    - @keyframes    /* Animation */

    ``` CSS
    
    @import "http://local.com/style.css";
    
    @import url("http://local.com/style.css");    

    @media(min-width: 500px) {
        /* rule here */
    }

    @font-face {
        /* rule here */
    }

    @keyframes nameofanimation {
        /* rule here */
    }

    ```