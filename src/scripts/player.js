document.addEventListener('DOMContentLoaded', function () {
    const youtubeLinkInput = document.getElementById('youtubeLink');
    const playButton = document.getElementById('playButton');
    const playerDiv = document.getElementById('player');
    const pauseButton = document.getElementById('playpause');

    let player; // Variável para armazenar o player do YouTube

    const urlFixaParaVideo = 'https://www.youtube.com/watch?v=VPRjCeoBqrI'

    // Função para extrair o ID do vídeo do YouTube a partir da URL
    function extractVideoId(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    // Função chamada pela API do YouTube quando ela estiver pronta
    window.onYouTubeIframeAPIReady = function () {
        console.log("API do YouTube carregada.")
    }

    // Função para criar o player do YouTube
    function createPlayer(videoId) {
        playerDiv.innerHTML = ''; // Limpa o player anterior
        player = new YT.Player('player', {
            height: '315',
            width: '560',
            videoId: videoId,
            playerVars: {
                autoplay: 1,
            },
        })
    }

    function iniciaVideo () {
        const videoUrl = urlFixaParaVideo //youtubeLinkInput.value.trim();
        const videoId = extractVideoId(videoUrl)

        if (videoId) {
            if (player) {
                player.loadVideoById(videoId); // Recarrega o vídeo no player existente
            } else {
                createPlayer(videoId); // Cria o player se ele ainda não existir
            }
        } else {
            alert('Por favor, insira um link válido do YouTube.')
        }
    }


    // Evento de clique no botão para tocar o vídeo
    playButton.addEventListener('click', () => {
        iniciaVideo()
    })

    // Evento de clique no botão para pausar ou retomar o vídeo
    pauseButton.addEventListener('click', () => {
        if (player && player.getPlayerState) {
            const playerState = player.getPlayerState();
            if (playerState === YT.PlayerState.PLAYING) {
                player.pauseVideo(); // Pausa o vídeo
            } else if (playerState === YT.PlayerState.PAUSED) {
                player.playVideo(); // Retoma o vídeo
            }
        } else {
            alert('O player ainda não foi iniciado.')
        }
    })

    // Adiciona o script da API do YouTube dinamicamente
    const scriptTag = document.createElement('script')
    scriptTag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag)
});
