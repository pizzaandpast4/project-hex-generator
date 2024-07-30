const bodyDOM = document.querySelector('body');
const hexDOM = document.querySelector('.hex');
const buttonDOM = document.querySelector('.generator');

const generateHexColor = () => {
    const randomColor = Math.random().toString(16).slice(2, 8);
    hexDOM.textContent = '#' + randomColor;
    bodyDOM.style.backgroundColor = '#' + randomColor;
};


buttonDOM.addEventListener('click', generateHexColor);