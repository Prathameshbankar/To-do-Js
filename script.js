const input = document.getElementById('inputbox');
const list = document.getElementById('list');
let tasks = [];

const getItems = () => {
    const items = JSON.parse(localStorage.getItem("list")) || [];
    tasks = items;
    tasks.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = item;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "&#x2715";
        li.appendChild(span);
    });
}

const addme = () => {
    if (input.value.trim() === '') {
        alert("write something");
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "&#x2715";
        li.appendChild(span);
        tasks.push(input.value);
        localStorage.setItem("list", JSON.stringify(tasks));
    }
    input.value = "";
}


document.querySelector('#list').addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN') {
        let removeit = e.target.parentNode;
        let taskText = removeit.textContent.slice(0, -1); 
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem("list", JSON.stringify(tasks));
        removeit.remove();
    }
});

getItems();
