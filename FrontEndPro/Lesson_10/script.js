const h3 = document.querySelector('h3');
const contactList = document.querySelector('.contact-list');
const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const inputPhoneNumber = document.querySelector('#phone-number');
const addContactBtn = document.querySelector('#add-contact-btn');
const deleteBtn = document.querySelector('#deleteBtn');
const contactListItemTemplate = document.querySelector('#contact-list__item-template');


addContactBtn.addEventListener('click', onButtonClick);
contactList.addEventListener('click', onDeleteBtnClick);

function onButtonClick() {
    if (inputName.value !== '' && inputSurname.value !== '' && !isNaN(inputPhoneNumber.value)) {
        h3.style.display = 'none';
        addContactItem()
        inputSurname.value = '';
        inputName.value = '';
        inputPhoneNumber.value = '';
    } else alert('Fill all fields correctly')
}

function addContactItem() {
    const contactListItemTwmplateHTML = contactListItemTemplate
    .innerHTML.replace('{name}', inputName.value)
    .replace('{surname}', inputSurname.value)
    .replace('{phoneNumber}', inputPhoneNumber.value);  

    contactList.insertAdjacentHTML("beforeend",contactListItemTwmplateHTML)
}

function onDeleteBtnClick(e) {
    const todoItem = getContactListItem(e.target);

    if (todoItem) {
        if (e.target.classList.contains('deleteBtn')) {
            todoItem.style.display = 'none';
            return;
        }
        alert('calling a number')
    }
}

function getContactListItem(el) {
    return el.closest('.contact-item');
}