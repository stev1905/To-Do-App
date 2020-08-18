let itemList = document.getElementById('list');

const addItem = (e) => {
    let input = document.getElementById('input').value;
    //check input length
    if(input.length > 0) {
        //create new li
        let li = document.createElement('li');
        li.className = 'list-item';
        li.appendChild(document.createTextNode(input));
        
        //create delete button
        let deleteButton = document.createElement('span');
        deleteButton.className = 'glyphicon glyphicon-remove';
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
    if(e.target.classList.contains('glyphicon-remove')) {
        if(confirm('Do you want to delete this item?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
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




