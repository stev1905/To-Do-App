const addItem = (e) => {
    e.preventDefault();

    let input = document.getElementById('input').value;
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    let deleteButton = document.createElement('span');
    deleteButton.className = 'glyphicon glyphicon-remove';
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    li.appendChild(deleteButton);
}

document.getElementById('button').addEventListener('click', addItem);


