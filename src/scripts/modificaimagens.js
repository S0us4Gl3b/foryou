document.addEventListener('DOMContentLoaded', () => {
    let imageIndex = 1; // Começa da primeira imagem
    const imageElement = document.getElementById('img-casal'); // Elemento da imagem

    // Número total de imagens disponíveis
    const totalImages = 8; // Ajuste conforme o número real de imagens

    // Função para verificar se a imagem existe
    function imageExists(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(true); // Imagem carregada com sucesso
            img.onerror = () => resolve(false); // Se houver erro ao carregar a imagem
            img.src = src; // Define o caminho da imagem
        });
    }

    // Função para atualizar a imagem
    async function updateImage() {
        let imagePath = `src/images/img-principal/img${imageIndex}.jpg`;

        // Verifica se a imagem existe
        const exists = await imageExists(imagePath);

        if (exists) {
            imageElement.src = imagePath; // Exibe a imagem
            imageIndex++; // Incrementa para a próxima imagem

            // Se o índice ultrapassar o número total de imagens, reinicia para 1
            if (imageIndex > totalImages) {
                imageIndex = 1;
            }
        } else {
            // Se a imagem não existir, volta para img1.jpg
            imageIndex = 1;
            imageElement.src = `src/images/img-principal/img${imageIndex}.jpg`; // Exibe a primeira imagem
        }
    }

    // Inicia a troca automática de imagens
    setInterval(updateImage, 2000); // Troca a imagem a cada 2 segundos

    // Exibe a primeira imagem assim que a página carrega
    window.onload = updateImage;
});
