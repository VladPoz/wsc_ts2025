// Переменные
const code = document.querySelector('.code');
const codeDescription = document.querySelector('.code__description');
const description = document.querySelector('.description');
const copyBtn = document.querySelector('.main__button');
const canvas = document.querySelector('.main__pole__blur');
const ctx = canvas.getContext('2d');

// Функция кнопки копирования
copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(code.textContent);
    allert('Код скопирован')
})

// Функция рандома
let i = localStorage.getItem('codeIndex');

function getRandom(){
    if (i === null) {
        i = Math.floor(Math.random() * 15);
        localStorage.setItem('codeIndex', i);
    }
}
getRandom()

// Функция стирания фона
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
ctx.fillStyle = '#cfcfcf';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isDrawing = false;

canvas.addEventListener('pointerdown', () => isDrawing = true);
canvas.addEventListener('pointerup', () => isDrawing = false);

canvas.addEventListener('pointermove', (e) => {
    if (!isDrawing) return;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 18, 0, Math.PI * 2);
    ctx.fill();
    // Вызов функций
    i = null;
    getRandom();
    copyBtn.classList.remove('hide');
    description.textContent = `🎉 ${dataGlobal[i].description}`;
});

// Получение данных из json
fetch('data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        dataGlobal = data;
        code.textContent = data[i].code;
        codeDescription.textContent = data[i].description;
        writeText()
        console.log(i);
    });