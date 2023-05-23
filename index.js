let addBtn = document.getElementById('addEntry');
let rmvBtn = document.getElementById('removeEntry');

let baseEntry = document.getElementById('Base');
let Table = document.getElementById('Table');
let clone = baseEntry.cloneNode(true);

function addEntry() { 
    Table.appendChild(clone);
    addBtn.addEventListener('click', addEntry);
}

addBtn.addEventListener('click', addEntry);
// document.createElement()