import domVars from './domVars'
import Project from './project'
import Todo from './todo'
import format from 'date-fns/format'

const todoDom =(() => {
	const todoModal = domVars.todoModal;
	const todoForm = domVars.todoForm;
	const todoContent = domVars.todoContent;

	domVars.addTodoButton.addEventListener('click', (e) => {
		todoModal.style.display = 'block';
	})

	domVars.todoClose.addEventListener('click', (e) => {
		todoModal.style.display = 'none';
	})

	window.addEventListener('click', (e) => {
		if(e.target == todoModal) {
			todoModal.style.display = 'none';
		}
	})


	function showTodos(projectList) {
		todoContent.innerHTML = '';
		projectList.forEach(function(item) {
			let div = document.createElement('div');
			div.classList.add('todoDiv');
			div.setAttribute('id', projectList.indexOf(item))
			let todoTitle = document.createElement('p');
			let todoDescription = document.createElement('p');
			let todoDate =  document.createElement('p');
			let todoPriority = document.createElement('button');
			let deleteTodo = document.createElement('i');

			todoTitle.classList.add('todoTitle');
			todoDescription.classList.add('todoDescription');
			todoDescription.style.display = 'none';
			todoDate.classList.add('todoDate');
			todoPriority.classList.add('todoPriority');
			deleteTodo.classList.add('icon-trash');

			todoTitle.innerHTML = item.title;
			todoDescription.innerHTML = item.description;
			todoDate.innerHTML = 'Due Date: ' + item.date;
			todoPriority.innerHTML = item.priority;

			if(todoPriority.innerHTML == 'urgent') {
				todoPriority.classList.add('todoPriorityUrgent');
			}

			todoPriority.addEventListener('click', (e) => {
				if(todoPriority.innerHTML == 'urgent') {
					e.stopPropagation();
					todoPriority.innerHTML = 'regular';
					todoPriority.classList.remove('todoPriorityUrgent');
				} else {
					e.stopPropagation();
					todoPriority.innerHTML = 'urgent';
					todoPriority.classList.add('todoPriorityUrgent');
				}
			})

			deleteTodo.addEventListener('click', (e) => {
				e.stopPropagation();
				projectList.splice(div.id, 1);
				showTodos(projectList);
			})

			div.appendChild(todoTitle);
			div.appendChild(todoDescription);
			div.appendChild(todoDate);
			div.appendChild(todoPriority);
			div.appendChild(deleteTodo);

			// todoContent.appendChild(div);
			todoContent.insertBefore(div, todoContent.childNodes[0]);

			div.addEventListener('click', (e) => {
				if(div.childNodes[1].style.display === 'none') {
					div.childNodes[1].style.display = 'block';
				} else {
					div.childNodes[1].style.display = 'none';
				}
			})
		})
	}


	function addTodos(project, todo) {
		let newTodo = {'title': todo.todoTitle.value, 'description': todo.todoDescription.value, 'date': format(new Date(todo.dueDate.value + ' 00:00'), 'MMM do, yyyy'), 'priority': todo.todoPriority.value}
		project.list.push(newTodo);
		showTodos(project.list);
		todoForm.reset();
		todoModal.style.display = 'none';
	}
	
	return {
		showTodos,
		addTodos
	}

})();

export default todoDom