let messageIndex = 0;

const messages = [
    "¿Seguro?",
    "Piénsalo otra vez",
    "Vamos, di que sí",
    "Porfiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
    "¿Enserio?"
];

function handleNoClic() {
    const nobutton = document.querySelector('.no-button');
    const yesbutton = document.querySelector('.yes-button');

    nobutton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesbutton).fontSize);
    yesbutton.style.fontSize = `${currentSize * 1.5}px`;
}

