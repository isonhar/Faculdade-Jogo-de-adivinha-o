const Estados = [
  "Abaiara",
  "Acaraú",
  "Acarape",
  "Acopiara",
  "Aiuaba",
  "Alcântaras",
  "Altaneira",
  "Alto Santo",
  "Amontada",
  "Antonina do Norte",
  "Apuiarés",
  "Aquiraz",
  "Aracati",
  "Aracoiaba",
  "Ararendá",
  "Araripe",
  "Aratuba",
  "Arneiroz",
  "Assaré",
  "Aurora",
  "Baixio",
  "Banabuiú",
  "Barbalha",
  "Barreira",
  "Barro",
  "Barroquinha",
  "Baturité",
  "Beberibe",
  "Bela Cruz",
  "Boa Viagem",
  "Brejo Santo",
  "Camocim",
  "Campos Sales",
  "Canindé",
  "Capistrano",
  "Caridade",
  "Cariré",
  "Caririaçu",
  "Cariús",
  "Carnaubal",
  "Cascavel",
  "Catarina",
  "Catunda",
  "Caucaia",
  "Cedro",
  "Chaval",
  "Choró",
  "Chorozinho",
  "Coreaú",
  "Crateús",
  "Crato",
  "Croatá",
  "Cruz",
  "Deputado Irapuan Pinheiro",
  "Ererê",
  "Eusébio",
  "Farias Brito",
  "Forquilha",
  "Fortaleza",
  "Fortim",
  "Frecheirinha",
  "General Sampaio",
  "Graça",
  "Granja",
  "Granjeiro",
  "Groaíras",
  "Guaiúba",
  "Guaraciaba do Norte",
  "Guaramiranga",
  "Hidrolândia",
  "Horizonte",
  "Ibaretama",
  "Ibiapina",
  "Ibicuitinga",
  "Icapuí",
  "Icó",
  "Iguatu",
  "Independência",
  "Ipaporanga",
  "Ipaumirim",
  "Ipu",
  "Ipueiras",
  "Iracema",
  "Irauçuba",
  "Itaiçaba",
  "Itaitinga",
  "Itapagé",
  "Itapipoca",
  "Itapiúna",
  "Itarema",
  "Itatira",
  "Jaguaretama",
  "Jaguaribara",
  "Jaguaribe",
  "Jaguaruana",
  "Jardim",
  "Jati",
  "Jijoca de Jericoacoara",
  "Juazeiro do Norte",
  "Jucás",
  "Lavras da Mangabeira",
  "Limoeiro do Norte",
  "Madalena",
  "Maracanaú",
  "Maranguape",
  "Marco",
  "Martinópole",
  "Massapê",
  "Mauriti",
  "Meruoca",
  "Milagres",
  "Milhã",
  "Miraíma",
  "Missão Velha",
  "Mombaça",
  "Monsenhor Tabosa",
  "Morada Nova",
  "Moraújo",
  "Morrinhos",
  "Mucambo",
  "Mulungu",
  "Nova Olinda",
  "Nova Russas",
  "Novo Oriente",
  "Ocara",
  "Orós",
  "Pacajus",
  "Pacatuba",
  "Pacoti",
  "Pacujá",
  "Palhano",
  "Palmácia",
  "Paracuru",
  "Paraipaba",
  "Parambu",
  "Paramoti",
  "Pedra Branca",
  "Penaforte",
  "Pentecoste",
  "Pereiro",
  "Pindoretama",
  "Piquet Carneiro",
  "Pires Ferreira",
  "Poranga",
  "Porteiras",
  "Potengi",
  "Potiretama",
  "Quiterianópolis",
  "Quixadá",
  "Quixelô",
  "Quixeramobim",
  "Quixeré",
  "Redenção",
  "Reriutaba",
  "Russas",
  "Saboeiro",
  "Salitre",
  "Santa Quitéria",
  "Santana do Acaraú",
  "Santana do Cariri",
  "São Benedito",
  "São Gonçalo do Amarante",
  "São João do Jaguaribe",
  "São Luís do Curu",
  "Senador Pompeu",
  "Senador Sá",
  "Sobral",
  "Solonópole",
  "Tabuleiro do Norte",
  "Tamboril",
  "Tarrafas",
  "Tauá",
  "Tejuçuoca",
  "Tianguá",
  "Trairi",
  "Tururu",
  "Ubajara",
  "Umari",
  "Umirim",
  "Uruburetama",
  "Uruoca",
  "letjota",
  "Várzea Alegre",
  "Viçosa do Ceará",
];

// Elementos DOM
const contadorErros = document.getElementById("erros");
const btndica = document.getElementById("dica");
const text_dnv = document.getElementById("text_dnv");
const inputText = document.getElementById("resposta");
const BTN_envio = document.getElementById("btn_envio");
const DivPalavraSecreta = document.getElementById("DivPalavraSecreta");

let DIFICULDADE = null;
let palavraOculta = RandomizarPalavra();
let palavraComDica = null;
let contadorDeErros = 0;
let palavraComCensura = null;
let dica = [];
let quantiaDeDicas = 0;
let maxDeDicas;

// SIMPLES---------------------------------------------------------------
// Especificos---------------------------------------------------------------

Main(true, palavraOculta);
// Função principal para introduzir as palavras secretas
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
// Randomiza uma palavra do Array de Estados
function RandomizarPalavra() {
  return Estados[Math.floor(Math.random() * 184)];
}
// Randomiza quais letras da palavra vão ser ocultas
function OcultarLetras(palavra) {
  // Array pra armazenar os indices que serão ocultos
  const OcultaIndice = [];

  // Aleatorização de quais indices vão ser salvos no array
  // Primeiro ele aleatoriza um numero de 0 ate o "max de letras da palavra" para definir quantos caracteres serão ocultados.
  // Depois de Definir quantas letras serão ocultas será randomizado quais letras.

  for (let i = 0; i < DIFICULDADE; i++) {
    const randomIndex = Math.floor(Math.random() * palavra.length);
    OcultaIndice.push(randomIndex);
  }

  // Palavra se torna um array para substituir os indices que foram aleatorizados
  const arrayLetras = PalavraArray(palavra);

  // define o maximo de dicas baseado na metade do tamanho do array "OcultaIndice"
  maxDeDicas = Math.floor(OcultaIndice.length / 2);
  // Aqui é onde substitui os indices por "*"
  // Porém se for um " " (espaço) vai somar +1 no indice para evitar de ocultar o mesmo.
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
// Transforma um array de palavra em varias divs > h1 (boxs de letras)
// Também organizam elas so DOM
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
// Trasforma string em array, cada letra se torna um indice
function PalavraArray(palavra) {
  const palavraArray = palavra.split("");
  return palavraArray;
}
// Reseta tudo que tem pra resetar e gera uma nova palavra
function TentarDNV() {
  disabled(false);
  ContadorDeErros(false);
  Dica(false);
  Sucesso(false);
  NovaPalavra();
  inputText.value = "";
}
// Aumenta + 1 erro ou zera o contador de acordo com parametro recebido
function ContadorDeErros(boolean) {
  if (boolean) {
    contadorDeErros++;
    contadorErros.textContent = "Erros: " + contadorDeErros;
  } else {
    contadorDeErros = 0;
    contadorErros.textContent = "Erros: " + contadorDeErros;
  }
}
// Gera outras div com uma nova palavra
function NovaPalavra() {
  LimparTextsBox();
  Main(true, RandomizarPalavra());
}
// Ajusta dificuldade para um valor entre 2 e o max de letras da palavras
function Dificuldade(palavra) {
  DIFICULDADE = Math.floor(Math.random() * (palavra.length - 2)) + 2;
}
// Desabilita ou habilita o input de texto, o botão de envio, e o botão de dica
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
// DICA
function Dica(boolean) {
  if (boolean) {
    if (quantiaDeDicas < maxDeDicas) {
      // Verifica se ja foi gerado as dicas, caso não será
      if (dica.length === 0) {
        // Caso não tenha,o "FOR" vai percorrer "palavraComCensura"(palavra secreta em array)
        for (var i = 0; i < palavraComCensura.length; i++) {
          // A cada "*" encontrado ele vai armazenar em dica[] a posição do "*"
          if (palavraComCensura[i] === "*") {
            dica.push(i);
          }
        }
      }

      palavraComDica = palavraOculta.split("");

      // Com dica[] ja possuindo os valores dos indices que contém "*"
      // O respectivo indice de "palavraComCensura" e "splitpalavra" possuem "*" e a "real letra"
      // Com isso "palavraComCensura" na posição de "*" recebe a "real letra"
      palavraComCensura[dica[quantiaDeDicas]] =
        palavraComDica[dica[quantiaDeDicas]];

      RefazerBoxDeTexto(palavraComCensura);

      quantiaDeDicas++;
    }
  } else if (false) {
    dica = [];
    quantiaDeDicas = 0;
  }
}
// Apaga as box de texto existente e gera uma nova com a palavra recebida no parâmetro
function RefazerBoxDeTexto(palavra) {
  LimparTextsBox();
  palavra.map(function (letra) {
    var divElement = document.createElement("div");
    if (letra !== " ") {
      var h1Element = document.createElement("h1");
      h1Element.textContent = letra;
      divElement.appendChild(h1Element);
    } else {
      divElement.classList.add("invisible");
    }
    DivPalavraSecreta.appendChild(divElement);
  });
}
// Verifica se o input enquanto selecionado teve alguma tecla clicada
inputText.addEventListener("keydown", function (event) {
  // Se a tecla foi o "ENTER" (CODE 13) ele ativa a função enviar
  if (event.keyCode === 13) {
    enviar();
  }
});
// Função para verificar se a resposta está correta
// Também chama outras funções de acordo com a verificação
// Desabilitar alguns botões e adicionar algumas classes caso correta
// Aumentar o contador de erro caso incorreta
function enviar() {
  if (inputText.value.toUpperCase() === palavraOculta.toUpperCase()) {
    disabled(true);
    Sucesso(true);
  } else {
    ContadorDeErros(true);
  }
}
// Adiciona ou remove classe de acordo com o parâmetro
function Sucesso(boolean) {
  if (boolean) {
    DivPalavraSecreta.classList.add("sucesso");
    text_dnv.classList.add("visible");
  } else {
    DivPalavraSecreta.classList.remove("sucesso");
    text_dnv.classList.remove("visible");
  }
}
// Remove do DOM as DIV que contém as letras
function LimparTextsBox() {
  while (DivPalavraSecreta.firstChild) {
    DivPalavraSecreta.removeChild(DivPalavraSecreta.firstChild);
  }
}
