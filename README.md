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

### Variáveis:

        let DIFICULDADE = null;
        let palavraOculta = RandomizarPalavra();
        let palavraComDica = null;
        let contadorDeErros = 0;
        let palavraComCensura = null;
        let dica = [];
        let quantiaDeDicas = 0;
        let maxDeDicas;

### function Main( )

- Função principal!
- Ela consiste em receber um boolean para verificar se a "palavra" ja está como array.
- Define algumas variáveis para serem usadas posteriormente.
- Chama outras funções.

```
   function Main(boolean, palavra) {
      palavraOculta = palavra;
      palavraComDica = palavra;
      Dificuldade(palavra);
      if (boolean) {
          PalavraMap(OcultarLetras(palavra));
      } else {
          PalavraMap(PalavraArray(palavra));
      }
    }
```

### function OcultarLetras( )

- Função responsavel por ocultar randomizar quais letras serão ocultas e ocultar.
- Ela usa um array junto com um math random que gera valores entre 0 e o maximo de letras da palavra.
- A quantidade de letras a serem ocultas é baseado na "DIFICULDADE".
- A substituição das letras é feita na palavra como array.
- No fim ele também armazena a palavra com letras ocultas em "palavraComCensura".
- Ele retorna um array da palavra ja com os caracteres ocultos.

```
    function OcultarLetras(palavra) {
        const OcultaIndice = [];

        for (let i = 0; i < DIFICULDADE; i++) {
            const randomIndex = Math.floor(Math.random() * palavra.length);
            OcultaIndice.push(randomIndex);
        }

        const arrayLetras = PalavraArray(palavra);

        maxDeDicas = Math.floor(OcultaIndice.length / 2);

        OcultaIndice.forEach((index) => {
            if (arrayLetras[index] === " ") {
                arrayLetras[index + 1] = "*";
            } else {
                arrayLetras[index] = "*";
            }
        });

        palavraComCensura = arrayLetras;

        return arrayLetras;
    }
```
