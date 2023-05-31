# Trabalho

## Descrição:

```
   - Jogo de adivinhar cidades do ceará
   - O jogo consiste em aparecer um dos estados do ceará com algumas letras ocultas.
   - A quantidade de letras ocultas é de acordo com o tamanho da palavra.
   - Tem um botão de dica limitado a metade da quantidade de letras ocultas.
   - Possui um contador de erro e um botão de reset
```

## Infos:

```
   - HTML,CSS e JAVASCRIPT.
   - Uso de SASS.
   - Uso de icons do FontAwesome.
```

## HTML:

```
   <body>
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
    <div id="DivPalavraSecreta"></div>
    <div class="resposta_box">
      <input id="resposta" type="text" placeholder="Resposta" />
      <button id="btn_envio" onclick="enviar()">Enviar</button>
    </div>
  </body>
```

- Completo : [HTML](https://github.com/isonhar/Faculdade-Jogo-de-adivinha-o/blob/main/index.html)

## JavaScript-Funções:

- Variáveis:

        let DIFICULDADE = null;
        let palavraOculta = RandomizarPalavra();
        let palavraComDica = null;
        let contadorDeErros = 0;
        let palavraComCensura = null;
        let dica = [];
        let quantiaDeDicas = 0;
        let maxDeDicas;

```
   - Jogo de adivinhar cidades do ceará
   - O jogo consiste em aparecer um dos estados do ceará com algumas letras ocultas.
   - A quantidade de letras ocultas é de acordo com o tamanho da palavra.
   - Tem um botão de dica limitado a metade da quantidade de letras ocultas.
   - Possui um contador de erro e um botão de reset
```
