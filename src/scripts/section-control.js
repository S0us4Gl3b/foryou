
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
const coracaoDiv = document.getElementById('coracao-div');

function createHeartExplosion(x, y) {
    // Para espalhar corações por toda a tela
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Definir a posição inicial do coração para o centro do clique
        heart.style.left = `${x - 10}px`;  // Ajuste para centralizar o coração
        heart.style.top = `${y - 10}px`;   // Ajuste para centralizar o coração

        // Direção aleatória para explosão
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 800;  // Máxima distância para o qual o coração se moverá
        const xOffset = Math.cos(angle) * distance;
        const yOffset = Math.sin(angle) * distance;

        // Definir as variáveis CSS para o movimento
        heart.style.setProperty('--x', xOffset + 'px');  // Deslocamento em X
        heart.style.setProperty('--y', yOffset + 'px');  // Deslocamento em Y

        container.appendChild(heart);

        // Remover o coração após a animação
        heart.addEventListener('animationend', () => heart.remove());
    }
    }

    // Detectar clique do usuário em #coracao-div
    coracaoDiv.addEventListener('click', (e) => {
        // Obter as coordenadas do clique
        const x = e.clientX;
        const y = e.clientY;

        // Gerar a explosão de corações
        createHeartExplosion(x, y);
    });

})