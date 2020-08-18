let itemList = document.getElementById('list');
let itemHeader = document.getElementById('input-header');
let button = document.getElementById('button');
let input = document.getElementById('input')

document.addEventListener('DOMContentLoaded', function() {
    let backGround = document.querySelector("body")
    backGround.style.backgroundImage = 'url(./images/background_toDo.png)'
});

const addItem = (e) => {
    let input = document.getElementById('input').value;
    //check input length
    if(input.length > 0) {
        //create new li
        let li = document.createElement('li');
        li.className = 'list-item';
        let textSpan = document.createElement('span');
        textSpan.className = 'list-text';
        textSpan.appendChild(document.createTextNode(input));
        li.appendChild(textSpan);

        //create check button
        let checkButton = document.createElement('span');
        checkButton.className = 'glyphicon glyphicon-ok';
        li.appendChild(checkButton);  

        //create delete button
        let deleteButton = document.createElement('span');
        deleteButton.className = 'glyphicon glyphicon-trash';
        li.appendChild(deleteButton);

        //append new list item
        itemList.appendChild(li);

        //clear input box
        document.getElementById('input').value = '';
    } else {
        alert('Please input your task');
    }
}

const removeItem = (e) => {
    if(e.target.classList.contains('glyphicon-trash')) {
        if(confirm('Do you want to delete this item?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

const clearAllItems = (e) => {
    if(e.target.id === 'clear') {
        if(confirm('Are you sure you want to clear the entire list?')) {
            while (itemList.firstChild) {
                itemList.removeChild(itemList.firstChild);
            }
        }
    }
}

const strikeItem = (e) => {
    if(e.target.classList.contains('glyphicon-ok')) {
        let li = e.target.parentElement.firstChild;
        e.target.style.color = 'lightgreen'
        li.style.textDecoration = "line-through";
    }
}

//Add event via click
button.addEventListener('click', addItem);

//Add event via Enter
input.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        addItem();
    }
});

//Delete event
itemList.addEventListener('click', removeItem);

//strikeout event
itemList.addEventListener('click', strikeItem);

//clear All Items event
itemHeader.addEventListener('click', clearAllItems);




