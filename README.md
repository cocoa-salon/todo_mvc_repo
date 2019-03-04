 # MVC를 적용한 todo 구현


# 모델(할일 데이터 생성에 관련된 것)

const todoList = [];

등록 버튼에 이벤트 리스너 등록
const button = document.querySelector("button");
button.addEventListener('click', generateTodoObj )


입력한 할일을 객체로 저장하고 배열을 만든다.
generateTodoObj() {
    const value = document.querySelector("input").value; 
    const todoObj = {
        name : value;
    }
    todoList.push(todoObj);
    input에 입력된 데이터를 가지고 객체 리터럴을 이용해 각각의 할일을 만든다. 
    만든 객체를 배열에 넣는다. 
    templateHTML(todoList) 호출
}

객체로 만들어진 할일 리스트를 HTML 템플레이팅으로 만드는 것. 
templateHTML(todoList) {
    const template = `<li>{{}}</li>`
    
    배열에 할일 객체를 하나씩 순회하면서 template에 추가
    displayTodoList() 호출
}


# 뷰(할일 데이터를 화면에 표시)

할일 리스트를 화면에 나타내는 함수
displayTodoList(result) {
    DOM 조작
}





