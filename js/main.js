const output = document.querySelector('.skills__output');
const input = document.querySelectorAll('.skills__input');

document.addEventListener('DOMContentLoaded', function() {
    input.forEach(el => {
        el.value = el.value / el.max * 100 | 0;
        el.style.background = 'linear-gradient(to right, rgb(77, 191, 217) 0%, rgb(77, 191, 217)' + el.value + '%, rgb(234, 236, 238)' + el.value + '%, rgb(234, 236, 238) 100%)';    
    })
});