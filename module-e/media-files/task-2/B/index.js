// Переменные
const password = document.querySelector('.password');
const password__view = document.querySelector('.password__view');
const password__indicator = document.querySelector('.main__password__indicator');
const inpicators = document.querySelectorAll('.inpicator');
const description = document.querySelector('.description');

const classes__work = [password__view, password__indicator, description];
let i = 0

// Функции
password.addEventListener('input', (e)=>{
    console.log('awda');
    if(e.target.value.length != 0){
        console.log('1');
        classes__work.forEach(classes => {
            classes.classList.remove('hide')
        });
        if(e.target.value.length <= 5){
            inpicators[0].classList.add('red');
            description.classList.add('redFont');
            description.textContent = 'Your password is too weak';
        }
        if(e.target.value.length > 5){
            inpicators[1].classList.add('orange');
            description.classList.add('orangeFont');
            description.textContent = 'Your password is medium';
        }
        else{
            inpicators[1].classList.remove('orange')
            description.classList.remove('orangeFont');
        }
        if(e.target.value.length > 10){
            inpicators[2].classList.add('green');
            description.classList.add('greenFont');
            description.textContent = 'Your password is strong';
        }else{
            inpicators[2].classList.remove('green')
            description.classList.remove('greenFont');
        }
    }else{
        console.log('0');
        classes__work.forEach(classes => {
            classes.classList.add('hide')
        });
    }
})

password__view.addEventListener('click', ()=>{
    if(i==0){
        i=1
        password.type = 'text';
        password__view.textContent = 'HIDE'
    }else{
        i=0
        password.type = 'password';
        password__view.textContent = 'DISPLAY'
    }
})