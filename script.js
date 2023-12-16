let todoList = JSON.parse(localStorage.getItem("todoList")) || [
    { name: '', duedate: '' },
];

function renderTodo() {
    let todoListHtml = "";

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const duedate = todoObject.duedate;

        if (name === '') {
            continue;
        }

        const html = `<div class="js-div">
                        <p id='name'>${name}</p> 
                        <p id ='duedate'>${duedate} </p>
                        <button id='delete' onclick="
                        todoList.splice(${i},1);
                        localStorage.setItem('todoList', JSON.stringify(todoList));
                        renderTodo();
                        ">Delete 
                        </button>
                        </div>
                        `;
        todoListHtml += html;
    }

    document.querySelector('.js-list').innerHTML = todoListHtml;
}


function AddTodo() {
    const inputElememt = document.querySelector('.js-name-input');
    const name = inputElememt.value;

    const dateinputElement = document.querySelector('.js-due-date');
    const duedate = dateinputElement.value;

    if (name !== "" && duedate !=='') {
        todoList.push({
            name: name,
            duedate: duedate
        });
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }else{
        alert("Please select both Name and date");
    }

    inputElememt.value = "";
    dateinputElement.value = '';  // Corrected this line
    renderTodo();
}

renderTodo();












function handleCostKeydown(event) {
    if (event.key === "Enter") {
        AddTodo();
    }
}