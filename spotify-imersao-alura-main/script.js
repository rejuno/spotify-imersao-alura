const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');
//Foi instalado o JSON SERVE - 
//pacote npm que tem a função de criar um "mini-servidor" 
//para que quando criar arquivos eles estarem imitando um 
//arquivo hospedado e baixado 



//Após instalar e colocar os dados da API digitar o seguinte comando no terminal: 
//json-server --watch api-artists/artists.json --port 3000

//console.log('Testando'); - código para ver se está funcionando

//criar função que coloca como parametro o searchTerm para consumir a API
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url) //serve para fazer requisição de APIs
        .then((response) => response.json())  //metodo que utiliza PROMISSES (Programação assincrona) para realizar requisicoes de API ou leitura em arquivos
        .then((result) => displayResults(result)) //ele vai pegar o resultado anterior e trabalhar de como será mostrado o artista
        //displayResults - função que será criada para mostrar os resultados
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove("hidden");
}

//document.addEventListener(tipo do evento (exemplos: 'input', 'text'), function() {}
document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase(); //searchTerm - nome da váriavel, ele vai pegar o valor do Id 'search-input'
    if (searchTerm === "") {
        resultPlaylist.classList.add("hidden"); //quando não digitar nada vai criar uma classe hidden que vai servir para ocultar os resultados
        resultArtist.classList.remove("hidden"); //vai remover a classe criada anteriormente no css e vai adicionar uma outra criar por aqui no javascript
        return
    }
    
    requestApi(searchTerm);
})


//INSTALAR SERVIDOR JSON-SERVER

//1)   npm uninstall -g json-server

//2)  npm install -g json-server@0.17.4

//3)   json-server --watch api-artists/artists.json port 3000

//*se der erro no passo 3 executa a função abaixo e depois o passo 2 novamente

//Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser

