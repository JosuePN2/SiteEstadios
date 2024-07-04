

/*document.addEventListener('DOMContentLoaded', function () {
    // Obter o ID do álbum da URL ou de onde você armazenou
    const albumId = obterIdDoAlbumDaUrlOuOutroLocal();

    // Carregar dados do álbum
    carregarDetalhesDoAlbum(albumId);

    // Carregar fotos do álbum
    carregarFotosDoAlbum(albumId);
});

function obterIdDoAlbumDaUrlOuOutroLocal() {
    
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 1; // Valor padrão para testar
}

function carregarDetalhesDoAlbum(albumId) {
    // Fazer solicitação GET para obter detalhes do álbum com o ID especificado
    fetch(`https://jsonserver.josuepn.repl.co/albuns/${albumId}`)
        .then(response => response.json())
        .then(album => {
            // Preencher elementos HTML com dados do álbum
            document.getElementById('albumTitle').innerText = album.title;
            // Adicione mais linhas para outros dados do álbum
        })
        .catch(error => console.error('Erro ao carregar detalhes do álbum:', error));
}

function carregarFotosDoAlbum(albumId) {
    // Fazer solicitação GET para obter fotos do álbum com o ID especificado
    fetch(`https://jsonserver.josuepn.repl.co/fotos?albumId=${albumId}`)
        .then(response => response.json())
        .then(fotos => {
            // Preencher elementos HTML com fotos do álbum
            const albumPhotosContainer = document.getElementById('albumPhotos');
            fotos.forEach(foto => {
                const photoCard = criarElementoDeFoto(foto);
                albumPhotosContainer.appendChild(photoCard);
            });
        })
        .catch(error => console.error('Erro ao carregar fotos do álbum:', error));
}

function criarElementoDeFoto(foto) {
    // Criar elemento HTML para exibir a foto
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    
    const photoDiv = document.createElement('div');
    photoDiv.innerHTML = `
        <img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;" src="${foto.imageUrl}">
        <div class="py-4">
            <p>${foto.description}</p><a href="item.html?photoId=${foto.id}">Detalhes</a>
        </div>
    `;

    colDiv.appendChild(photoDiv);
    return colDiv;
}*/
