// Exibe mensagem de boas-vindas
window.addEventListener('load', () => {
    alert('Bem-vindo ao Totale Sapore! Esperamos que tenha uma ótima experiência.');
});


// Adiciona alerta ao clicar no Cardápio Digital
const menuButton = document.querySelector('.btn');
menuButton.addEventListener('click', event => {
    event.preventDefault(); // Evita o redirecionamento
    alert('O Cardápio Digital está em manutenção no momento. Volte em breve!');
});


const heroTitle = document.querySelector('.hero-title');
const heroTexts = ['É Gostoso Estar Aqui', 'A Essência da Itália', 'Onde o Sabor Encontra o Amor'];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < heroTexts[textIndex].length) {
        heroTitle.textContent += heroTexts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            heroTitle.textContent = '';
            charIndex = 0;
            textIndex = (textIndex + 1) % heroTexts.length;
            typeEffect();
        }, 2000);
    }
}

typeEffect();




const loginButton = document.querySelector('.btn-login');
loginButton.addEventListener('click', event => {
    event.preventDefault();
    alert('O Botão Entrar está em manutenção no momento, Volte em breve!');
})

