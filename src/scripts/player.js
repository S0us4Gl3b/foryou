document.addEventListener('DOMContentLoaded', () => {

    const videoLink = "https://www.youtube.com/watch?v=Br2rofxz_C0";
    const videoContainer = document.getElementById('player');

    const btnpausePlay = document.getElementById('playButton') 

    window.modificaBtnPlayPause = false

    // Extract the video ID from the URL
    const urlRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]+)|youtu\.be\/([\w-]+)/;
    const match = videoLink.match(urlRegex);

    const videoId = match && (match[1] || match[2]);

    if (videoId) {
        // Cria o player
        youtubePlayer = new YT.Player('player', {
            height: '315',
            width: '560',
            videoId: videoId,
            events: {
                onReady: () => {
                    console.log('Player pronto!');
                },
                onError: (e) => {
                    console.error('Erro no player:', e);
                }
            }
        });

        // Ajustar o tamanho do player
        const setPlayerSize = () => {
            const screenWidth = window.innerWidth; // Largura da tela
            const playerWidth = Math.min(screenWidth * 0.7, 350); // 70% da largura da tela ou no máximo 350px
            const playerHeight = playerWidth * 9 / 16; // Mantém a proporção 16:9

            youtubePlayer.setSize(playerWidth, playerHeight)
        }

        // Chama a função para ajustar o tamanho do player
        setPlayerSize();

        // Adicionar listener para redimensionamento da janela
        window.addEventListener('resize', setPlayerSize);

    } else {
        document.getElementById('player').innerHTML = '<p style="color: red;">Invalid YouTube URL. Please try again.</p>';
    }
    
    btnpausePlay.addEventListener('click', () => {
        if (youtubePlayer && modificaBtnPlayPause === true) {
            youtubePlayer.pauseVideo()

            modificaBtnPlayPause = false
        
        } else {
            if (youtubePlayer && modificaBtnPlayPause === false) {
                youtubePlayer.playVideo()

                modificaBtnPlayPause = true
            }
        } 

        console.log(modificaBtnPlayPause)

    })


});