document.addEventListener('DOMContentLoaded', () => {
    // Adicionar a API do YouTube dinamicamente
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    const videoLink = "https://www.youtube.com/watch?v=Br2rofxz_C0";
    const videoContainer = document.getElementById('player');
    const btnpausePlay = document.getElementById('playButton');
    
    window.modificaBtnPlayPause = true; // Flag para controlar o estado do botão de play/pause
    
    let youtubePlayer = null; // Variável para armazenar o player do YouTube
    
    // Extrair o ID do vídeo da URL
    const urlRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]+)|youtu\.be\/([\w-]+)/;
    const match = videoLink.match(urlRegex);
    const videoId = match && (match[1] || match[2]);

    // Função para criar o player do YouTube
    function createYouTubePlayer() {
        if (videoId && !youtubePlayer) { // Evitar recriar o player se já existir
            youtubePlayer = new YT.Player('player', {
                height: '315',
                width: '560',
                videoId: videoId,
                events: {
                    onReady: onPlayerReady,
                    onError: onPlayerError
                }
            });

            // Ajustar o tamanho do player
            setPlayerSize();
            window.addEventListener('resize', setPlayerSize);
        } else if (!videoId) {
            document.getElementById('player').innerHTML = '<p style="color: red;">Invalid YouTube URL. Please try again.</p>';
        }
    }

    // Função para definir o tamanho do player com base no tamanho da tela
    function setPlayerSize() {
        const screenWidth = window.innerWidth; // Largura da tela
        const playerWidth = Math.min(screenWidth * 0.7, 350); // 70% da largura da tela ou no máximo 350px
        const playerHeight = playerWidth * 9 / 16; // Mantém a proporção 16:9

        if (youtubePlayer) {
            youtubePlayer.setSize(playerWidth, playerHeight);
        }
    }

    // Função chamada quando o player está pronto
    function onPlayerReady() {
        console.log('Player pronto!');
    }

    // Função chamada em caso de erro no player
    function onPlayerError(e) {
        console.error('Erro no player:', e);
    }

    // Função para alternar entre play e pause
    function togglePlayPause() {
        if (youtubePlayer) {
            if (modificaBtnPlayPause) {
                youtubePlayer.pauseVideo();
                modificaBtnPlayPause = false;
            } else {
                youtubePlayer.playVideo();
                modificaBtnPlayPause = true;
            }
            console.log('Botão de play/pause estado:', modificaBtnPlayPause);
        }
    }

    // Event listener para o botão de play/pause
    btnpausePlay.addEventListener('click', () => {
        togglePlayPause();
    });

    // Função chamada quando a API do YouTube está pronta
    window.onYouTubeIframeAPIReady = createYouTubePlayer;


    console.log('Botão de play/pause estado:', modificaBtnPlayPause);

});
