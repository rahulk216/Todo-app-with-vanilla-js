let textbox = document.getElementById('textbox');
let add = document.getElementById('add');

let todo_container = document.querySelector('.todo-container');

console.log(textbox, add, todo_container);

add.addEventListener('click', () => {
	let para = document.createElement('p');
	para.innerText = textbox.value;
	todo_container.appendChild(para);
});
