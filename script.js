const SAVED_TODOS_KEY = 'saved-todos';

let itemList = document.getElementById('list');
let itemHeader = document.getElementById('input-header');
let button = document.getElementById('button');
let input = document.getElementById('input');

const savedTodos =  getSavedTodos();
savedTodos.forEach(todo=> renderItem(todo));

document.addEventListener('DOMContentLoaded', function() {
    let backGround = document.querySelector("body")
    backGround.style.backgroundImage = 'url(./images/background_toDo.png)'
});

function renderItem(todo) {
    let li = document.createElement('li');
    li.className = 'list-item';
    let textSpan = document.createElement('span');
    textSpan.className = 'list-text';
    textSpan.appendChild(document.createTextNode(todo.text));
    li.appendChild(textSpan);

    //create check button
    let checkButton = document.createElement('span');
    checkButton.className = 'glyphicon glyphicon-ok';
    li.appendChild(checkButton);  

    //create delete button
    let deleteButton = document.createElement('span');
    deleteButton.id = todo.id;
    deleteButton.className = 'glyphicon glyphicon-trash';
    li.appendChild(deleteButton);

    //append new list item
    itemList.appendChild(li);
}

function getSavedTodos() {
    return JSON.parse(localStorage.getItem(SAVED_TODOS_KEY)) || [];
}

//Add event via click
button.addEventListener('click', addItem);
//Add event via Enter
input.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        addItem();
    }
});
function addItem(e) {
    let input = document.getElementById('input').value;
    //check input length
    if(input.length > 0) {
        //create new li
        const todo = {
            id: Math.floor(new Date().getTime() * Math.random()),
            text: input
        }
        renderItem(todo);

        //get back saved toDos from local storage ls (assume its an array)
        let savedTodos = getSavedTodos();

        savedTodos.push(todo)
        localStorage.setItem(SAVED_TODOS_KEY, JSON.stringify(savedTodos));
        //localStorage.setItem('saved-todos', [input]);
        //clear input box
        document.getElementById('input').value = '';
    } else {
        alert('Please input your task');
    }
}

//Delete event
itemList.addEventListener('click', removeItem);
function removeItem(e) {
    if(e.target.classList.contains('glyphicon-trash')) {
        if(confirm('Do you want to delete this item?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);

            const savedTodos = getSavedTodos();
            const todoDelete = savedTodos.find(todo => todo.id.toString() === e.target.id);
            const index = savedTodos.indexOf(todoDelete);
            savedTodos.splice(index, 1);
            localStorage.setItem(SAVED_TODOS_KEY, JSON.stringify(savedTodos));
        }
    }
}

const clearAllItems = (e) => {
    if(e.target.id === 'clear') {
        if(confirm('Are you sure you want to clear the entire list?')) {
            while (itemList.firstChild) {
                itemList.removeChild(itemList.firstChild);
            }
            localStorage.setItem(SAVED_TODOS_KEY, JSON.stringify([]));
        }
    }
}
itemHeader.addEventListener('click', clearAllItems);

const strikeItem = (e) => {
    if(e.target.classList.contains('glyphicon-ok')) {
        let li = e.target.parentElement.firstChild;
        e.target.style.color = 'lightgreen';
        li.style.textDecoration = "line-through";
    }
}
itemList.addEventListener('click', strikeItem);






