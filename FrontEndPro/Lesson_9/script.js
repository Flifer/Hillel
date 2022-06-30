const h3 = document.querySelector('h3');
const ol = document.querySelector('ol');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', onButtonClick);

function onButtonClick() {
    let li = document.createElement('li');
    if (input.value !== '') {
        h3.style.display = 'none';
        li.textContent = input.value;
        ol.append(li);
        input.value = '';
    }
    
}