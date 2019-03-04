// todo mvc 

class TodoView {
    constructor() {
        this.button = document.querySelector("button");
        this.button.addEventListener('click', controller.callGenerateTodoObj.bind(controller));
        this.button.addEventListener('click', controller.callCountModel.bind(controller));
        this.area = document.querySelector(".todolist-visible"); 
    }
    display(res) {
        this.area.innerHTML = res;
    }
}


class CountView {
    constructor() {
        this.todoCountArea = document.querySelector(".todo-count"); // div
    }
    // 횟수를 표시한다. 
    displayCount(todoCount) {
        this.todoCountArea.innerText = todoCount;
    }
}


// 컨트롤러의 역할 this.res를 view에 전달한다. 
class Controller {
    callGenerateTodoObj() {
        todoModel.generateTodoObj();
    }
    callDisplay(res) {
        todoView.display(res);
    }
    callDisplayCount(todoCount) {
        countView.displayCount(todoCount)
    }
    callCountModel(){
        countModel.countTodo(); 
    }
}


class CountModel {
    constructor(todoList) {
        this.todoCount = 0;
        this.todoList = todoList;
    }
    countTodo() {
        this.todoCount = this.todoList.length; 
        controller.callDisplayCount(this.todoCount);
    }

}

class TodoModel {
    constructor() {
        this.todoList = [];
        this.res = ""; 
    }

    generateTodoObj() {
        const value = document.querySelector("input").value;
        const todoObj = {
            name: value
        }
        this.todoList.push(todoObj);
        this.templateHTML(this.todoList);
    }

    templateHTML(todoList) {
        let res = ""; 
        todoList.forEach(element => {
            res += `<li id="1233"> ${element['name']} <span class="deleteX"> X </span></li>`;
        });        
        controller.callDisplay(res); 
        res ="";
    }
}

const todoModel = new TodoModel();
const controller = new Controller(); 
const countModel = new CountModel(todoModel.todoList); 
const todoView = new TodoView(); 
const countView = new CountView(); 