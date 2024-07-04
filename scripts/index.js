/*const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

// Para permitir que os dados sejam alterados, altere a linha abaixo
// colocando o atributo readOnly como false.
const middlewares = jsonServer.defaults({readOnly: false})

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

// Use a classe da sua estrutura atual
// ...

// Adicione aqui o conteúdo do card, semelhante à lógica anterior
const albumListContainer = document.getElementById('album-list');

// Fazer uma requisição para obter os álbuns do servidor
fetch('https://replit.com/@JosuePN/JSONServer')
.then(response => response.json())
.then(albuns => {
  const albunsGrid = document.getElementById('albuns-grid');

  albuns.forEach(album => {
    const albumCard = document.createElement('div');
    albumCard.classList.add('col');  // Mantenha a classe "col" para manter o layout do Bootstrap

    // Adiciona a imagem de capa
    const coverImage = document.createElement('img');
    coverImage.classList.add('rounded', 'img-fluid', 'd-block', 'w-100', 'fit-cover');
    coverImage.style.height = '200px';  // Ajuste a altura conforme necessário
    coverImage.src = album.coverImageUrl;
    albumCard.appendChild(coverImage);

    // Adiciona o título
    const title = document.createElement('h4');
    title.textContent = album.title;
    albumCard.appendChild(title);

    // Adiciona o descritivo
    const description = document.createElement('p');
    description.textContent = album.description;
    albumCard.appendChild(description);

    // Adiciona um link para a página de detalhes (album.html)
    const link = document.createElement('a');
    link.href = `album.html?id=${album.id}`;  // Isso envia o id do álbum para a página de detalhes
    link.textContent = 'Acessar';
    albumCard.appendChild(link);

    // Adiciona o card à grade
    albunsGrid.appendChild(albumCard);
    
  });
})
.catch(error => console.error('Erro ao obter álbuns:', error));*/
