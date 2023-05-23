let addBtn = document.getElementById('addEntry');
let rmvBtn = document.getElementById('removeEntry');

let baseEntry = document.getElementById('Base');
let Table = document.getElementById('Table');
let Table2 = document.getElementById('Table2');

function addEntry() { 
    Table.appendChild(baseEntry.cloneNode(true));
    addBtn.addEventListener('click', addEntry);
}

function rmvEntry() {
    if(Table.childElementCount == 1) {
        rmvBtn.addEventListener('click', rmvEntry);
    } else {    
        Table.lastElementChild.remove();
        rmvBtn.addEventListener('click', rmvEntry);
    }
}

addBtn.addEventListener('click', addEntry);
rmvBtn.addEventListener('click', rmvEntry);