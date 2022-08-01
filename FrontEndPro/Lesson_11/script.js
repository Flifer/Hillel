ADD_GOAL_BTN_CLASS = 'add-goal-btn'
DELETE_BTN_CLASS = 'deleteBtn'
DONE_TODO_ITEM_CLASS = 'done'
TODO_ITEM_CLASS = 'toDoItem'

const h3 = document.querySelector('h3');
const ol = document.querySelector('ol');
const input = document.querySelector('input');
const addGoalButton = document.querySelector(`.${ADD_GOAL_BTN_CLASS}`);

addGoalButton.addEventListener('click', onButtonClick);
ol.addEventListener('click', onGoalClick)


function onButtonClick() {
    let message = getMessage(input)
    if (message !== '') {
        addHtmlElementLI(message)
        input.value = ''
        h3.style.display = 'none'
    } else {
        alert('empty field')
    }
}

function getMessage(input) {
    return input.value
}

function addHtmlElementLI(message) {
    const toDoItemTemplateHTML = `
    <li class="toDoItem">
        <span>${message}</span>
        <button class="deleteBtn">delete</button>
    </li>
    `
    ol.insertAdjacentHTML('beforeend', toDoItemTemplateHTML)
}

function onGoalClick(e) {
    const toDoItem = getToDoItem(e.target);
    if (toDoItem) {
        if (e.target.classList.contains(DELETE_BTN_CLASS)) {
            ol.removeChild(toDoItem)
            return;
        }
        toDoItem.classList.toggle(DONE_TODO_ITEM_CLASS)
    }
}

function getToDoItem(el) {
    return el.closest(`.${TODO_ITEM_CLASS}`);
}