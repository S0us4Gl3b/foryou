document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('container');

    window.ativachuva = false

    // Função para criar a chuva de corações
    function createHeartRain() {

        if (ativachuva){
            for (let i = 0; i < 10; i++) {  // Quantidade de corações que caem
                const heart = document.createElement('div');
                heart.classList.add('heart');

                // Posição aleatória para o coração aparecer na tela
                const x = Math.random() * window.innerWidth;  // Posição X aleatória
                heart.style.left = `${x}px`;

                // Direção aleatória para o movimento do coração
                const angle = Math.random() * 2 * Math.PI;
                const distance = Math.random() * window.innerHeight*0.8;  // Distância aleatória para o movimento
                const xOffset = Math.cos(angle) * distance;
                const yOffset = Math.sin(angle) * distance;
                console.log(window.innerHeight)

                // Definir a posição inicial do coração no topo da tela
                heart.style.top = `-50px`;  // Começa um pouco acima da tela

                // Definir as variáveis CSS para o movimento
                heart.style.setProperty('--x', xOffset + 'px');  // Deslocamento em X
                heart.style.setProperty('--y', yOffset + 'px');  // Deslocamento em Y

                // Adicionar o coração ao container
                container.appendChild(heart);

                // Remover o coração após a animação
                heart.addEventListener('animationend', () => heart.remove());
            }
        }
    }
    // Gerar a chuva de corações a cada 1 segundo
    setInterval(createHeartRain, 1000);  // Gera novos corações a cada 1 segundo
    
});
