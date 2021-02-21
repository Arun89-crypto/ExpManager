//selecting items from doc

let type = document.getElementById('type');
let exp = document.getElementById('Expense');
// let date = document.getElementById('date');
let desc = document.getElementById('desc');
let submit = document.getElementById('submit');

let table = document.querySelector('.display-items');


let total = document.querySelector('.total');
console.log(total);

showItems()

submit.addEventListener('click', addVal);
table.addEventListener('click', deleteItem);

function addVal() {

    let typ = type.value;
    let ex = exp.value;
    // let dat = date.value;
    let des = desc.value;
    if (typ, ex, des != '') {
        ind = localStorage.length++;
        var a = [typ, ex, des];
        localStorage.setItem(ind, a);

        location.reload()
    }
    else {
        alert('Please Enter all the values!!')
    }
}

function showItems() {
    if (localStorage.length > 0) {
        let totalSum = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const element = localStorage[i].split(',');
            let ele = document.createElement('tr');
            ele.className = 'table-item';
            ele.id = i;

            ele.innerHTML = `
                        <td>${element[0].toLowerCase()}</td>
                        <td>$${element[1]}</td>
                        <td>${element[2].toLowerCase()}</td>
                    <td><button class="delete">X</button></td>
                        
                            `;

            table.appendChild(ele);
            totalSum += parseInt(element[1]);
        }
        total.innerHTML = `<h3>Total : $${totalSum}</h3>`;
    }
}

function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        let ele = e.target.parentElement.parentElement;
        console.log(ele);
        table.removeChild(ele);
        localStorage.removeItem(ele.id);
    }
    location.reload();
}


