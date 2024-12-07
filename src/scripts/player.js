document.addEventListener('DOMContentLoaded', function () {
    const youtubeLinkInput = document.getElementById('youtubeLink');
    const playButton = document.getElementById('playButton');
    const playerDiv = document.getElementById('player');

    const srcOriginal = "https://www.youtube.com/embed/${videoId}?autoplay=1"

    // Função para extrair o ID do vídeo do YouTube a partir da URL
    function extractVideoId(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    // Função para embutir o player com o ID do vídeo
    function loadVideo(videoId) {
        const videID2 = 'https://www.youtube.com/watch?v=QtXby3twMmI'
        
        
        playerDiv.innerHTML = `
            <iframe 
                width="560" 
                height="315" 
                src= "${videID2}?autoplay=1"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>`;
    }

    // Evento de clique no botão para tocar o vídeo
    playButton.addEventListener('click', () => {
        const videoUrl = youtubeLinkInput.value.trim();
        const videoId = extractVideoId(videoUrl);

        if (videoId) {
            loadVideo(videoId); // Reproduz o vídeo se o ID for encontrado
        } else {
            alert('Por favor, insira um link válido do YouTube.');
        }
    });
});
