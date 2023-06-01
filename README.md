# Trabalho de WebCoding

![Tela](https://github.com/isonhar/Faculdade-Jogo-de-adivinha-o/blob/main/Screen.jpg)

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
- Faz uso da função "PalavraArray( )" pra trasnformar a palavra em array.
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

### function PalavraMap( )

- Faz um map de um array(no caso da palavra em modo array).
- Cria elementos "DIV > H1" e colocam como filhos do elemento com id "DivPalavraSecreta".
- A cada letra no array ficará uma div diferente assim formando "box" separadas para cada letra.

```
    function PalavraMap(palavraArray) {

        palavraArray.map(function (letra) {

            const divElement = document.createElement("div");

            if (letra !== " ") {

                const h1Element = document.createElement("h1");
                h1Element.textContent = letra;
                divElement.appendChild(h1Element);

            } else {

                divElement.classList.add("invisible");

            }

            DivPalavraSecreta.appendChild(divElement);

        });
    }
```

### TentarDNV( )

- Chama várias outras funções com parâmetros "false", oq vai ativar em cada função apenas a parte voltada para "resetar o app".
- Chama "NovaPalavra( )" pra gerar outra palavra.
- Apaga o conteúdo do input de resposta.

```
    function TentarDNV() {
        disabled(false);
        ContadorDeErros(false);
        Dica(false);
        Sucesso(false);
        NovaPalavra();
        inputText.value = "";
    }
```

### function NovaPalavra( )

- Chama "LimparTextsBox( )".
- Chama Main com os parâmetros "true" e "RandomizarPalavra()".

```
    function NovaPalavra() {
        LimparTextsBox();
        Main(true, RandomizarPalavra());
    }
```

### function LimparTextsBox( )

- Limpa todos os filhos do elemento "DivPalavraSecreta", pra poder posteriormente adicionar outra palavra sem problemas.
- A lógica é "enquanto DivPalavraSecreta ter um primeiro filho, remover de DivPalavraSecreta seu primeiro filho.

```
    function LimparTextsBox() {
        while (DivPalavraSecreta.firstChild) {
        DivPalavraSecreta.removeChild(DivPalavraSecreta.firstChild);
    }
}
```

### function enviar( )

- Usada para verificar a resposta.
- Compara o input com "palavraOculta" que foi armazenado o valor da palavra secreta.
- Se sucesso ele chama as funções "disabled(true)" e "Sucesso(true)".
- Se falhar a verificação ele chama "ContadorDeErros(true)".

```
    function enviar() {
        if (inputText.value.toUpperCase() === palavraOculta.toUpperCase()) {
            disabled(true);
            Sucesso(true);
        } else {
            ContadorDeErros(true);
        }
    }
```

- A função "enviar( )" tbm é chamada caso a tecla enter seja clicada dentro do input.
- CODE 13 = ENTER

```
    inputText.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            enviar();
        }
    });
```

### function ContadorDeErros( )

- Recebe um boolean.
- Se for true: o contador será ativo e aumentará + 1 e mudará o texto do elemento "contadorErros"
- Se for false: o contador será resetado a 0.

```
    function ContadorDeErros(boolean) {
        if (boolean) {
            contadorDeErros++;
            contadorErros.textContent = "Erros: " + contadorDeErros;
        } else {
            contadorDeErros = 0;
            contadorErros.textContent = "Erros: " + contadorDeErros;
        }
    }
```

### function Sucesso( )

- Recebe um boolean.
- Se true: Os elementos "DivPalavraSecreta" e "text_dnv" vão receber novas classes.
- Se false: Os elementos "DivPalavraSecreta" e "text_dnv" vão perder as classes.

```
    function Sucesso(boolean) {
        if (boolean) {
            DivPalavraSecreta.classList.add("sucesso");
            text_dnv.classList.add("visible");
        } else {
            DivPalavraSecreta.classList.remove("sucesso");
            text_dnv.classList.remove("visible");
        }
    }
```

### function disabled( )

- Recebe um boolean.
- Se true: ele desabilita alguns elementos.
- se false: ele ativa alguns elementos.

```
    function disabled(boolean) {
        if (boolean) {
            BTN_envio.disabled = true;
            inputText.disabled = true;
            btndica.disabled = true;
        } else {
            BTN_envio.disabled = false;
            inputText.disabled = false;
            btndica.disabled = false;
        }
    }
```

### function RandomizarPalavra( )

- Faz um math.random no indice do array "Estados[]".

```
    function RandomizarPalavra() {
        return Estados[Math.floor(Math.random() * 184)];
    }
```

### function PalavraArray( )

- Transforma uma palavra em um Array[].

```
    function PalavraArray(palavra) {
        const palavraArray = palavra.split("");
        return palavraArray;
    }
```

### function Dificuldade( )

- Randomiza um valor entre 2 e o máximo de letras da palavra recebida no parâmetro.
- Seta o valor na variável "DIFICULDADE".

```
    function Dificuldade(palavra) {
        DIFICULDADE = Math.floor(Math.random() * (palavra.length - 2)) + 2;
    }
```

### function PalavraArray( )

- Basicamente ele serve para dar dicas ou zerar as dicas quando trocar a palavra.
- Recebe um boolean.
- Se false: ela zera as dicas.
- Se true: ele verifica se quantiaDeDicas < maxDeDicas(definido em ocultarletras)
- Se não for ele vai continuar gerando dicas.
- As dicas são geradas verificando em quais indices tem "\*" e armazenando em um array.
- "palavraComDica" recebe array de "palavraOculta"
- Depois é substituido as posuições onde tem "\*" para o valor real que esta em "palavraComDica"
- No fim refaz o DOM da palavra com a dica renderizada.

```
    function Dica(boolean) {
        if (boolean) {
            if (quantiaDeDicas < maxDeDicas) {
                if (dica.length === 0) {
                    for (var i = 0; i < palavraComCensura.length; i++) {
                        if (palavraComCensura[i] === "*") {
                            dica.push(i);
                        }
                    }
                }
                palavraComDica = palavraOculta.split("");

                palavraComCensura[dica[quantiaDeDicas]] =
                palavraComDica[dica[quantiaDeDicas]];

                RefazerBoxDeTexto(palavraComCensura);

                quantiaDeDicas++;
            }
        } else if(false) {
            dica = [];
            quantiaDeDicas = 0;
        }
    }
```
