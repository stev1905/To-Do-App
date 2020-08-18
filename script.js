let itemList = document.getElementById('list');

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
        li.appendChild(document.createTextNode(input));

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
    console.log(e.target.parentElement)
    if(e.target.classList.contains('glyphicon-trash')) {
        if(confirm('Do you want to delete this item?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

const strikeItem = (e) => {
    if(e.target.classList.contains('glyphicon-ok')) {
        let li = e.target.parentElement;
        li.style.textDecoration = "line-through";
    }
}

//Add event
document.getElementById('button').addEventListener('click', addItem);
document.getElementById('input').addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        addItem();
    }
});

//Delete event
itemList.addEventListener('click', removeItem);

//strikeout event
itemList.addEventListener('click', strikeItem);




