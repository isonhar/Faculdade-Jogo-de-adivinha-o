# Trabalho

## Descrição:

```
   - Jogo de adivinhar cidades do ceará
   - O jogo consiste em aparecer um dos estados do ceará com algumas letras ocultas.
   - A quantidade de letras ocultas é de acordo com o tamanho da palavra.
   - Tem um botão de dica limitado a metade da quantidade de letras ocultas.
   - Possui um contador de erro e um botão de reset
```

## HTML:

```
   <body>
    <!-- Menus: contador de erros, botão de reset e dica --------- -->
    <div class="menus">
      <h2 id="erros">Erros: 0</h2>
      <div class="reset">
        <button onclick="TentarDNV()">
          <i class="fa-solid fa-rotate-right" id="resetIcons"></i>
        </button>
        <h3 id="text_dnv">Gerar outra palavra</h3>
      </div>
      <button id="dica" onclick="Dica(true)">
        <i class="fa-solid fa-lightbulb"></i>
      </button>
    </div>
    <!-- Área da da charada -------------------------------------- -->
    <div id="DivPalavraSecreta"></div>
    <!-- Text Input e Button de envio ---------------------------- -->
    <div class="resposta_box">
      <input id="resposta" type="text" placeholder="Resposta" />
      <button id="btn_envio" onclick="enviar()">Enviar</button>
    </div>
  </body>
```
