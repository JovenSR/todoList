import domVars from './domVars'
import Project from './project'
import todoDom from './todoDom'


const projectDom = (() => {
	const projectArray = [];
	const projectModal = domVars.projectModal;
	const projectForm = domVars.projectForm;
	const projectContent = domVars.projectContent;
	let projectFlag = 'Default';
	const showTodos = todoDom.showTodos;
	const todoForm = domVars.todoForm;
	const addTodos = todoDom.addTodos;


	function defaultStart() {
		const defaultProject = Project('Default');
		defaultProject.list.push({'title': 'default todo', 'description': 'testing out default todo', 'date': 'Sept 23, 2089', 'priority': 'regular'});
		let div = document.createElement('div');
		let para = document.createElement('p');
		let deleteProject = document.createElement('i');

		para.innerHTML = defaultProject.name;
		div.appendChild(para);
		div.appendChild(deleteProject);

		div.classList.add('projectDiv');
		deleteProject.classList.add('icon-trash');
		projectContent.appendChild(div);
		projectArray.push(defaultProject);
		defaultProject.id = projectArray.indexOf(defaultProject);
		div.setAttribute('id', defaultProject.id);
		div.addEventListener('click', (e) => {
			projectFlag = defaultProject.name;
			changeFlag();
		})
		deleteProject.addEventListener('click', (e) => {
			e.stopPropagation();
			defaultProject.list = [];
			showTodos(defaultProject.list);
			projectArray.splice(defaultProject.id, 1);
			projectContent.removeChild(div);
		})
		changeFlag();
	}

	defaultStart();
	
	function changeFlag() {
		let found = projectArray.find(item => item.name == projectFlag);
		projectContent.childNodes.forEach(function(div) {
			if(div.id == found.id) {
				div.classList.add('selectedProject');
				showTodos(found.list)
			} else {
				div.classList.remove('selectedProject');
			}
		})
	}


	domVars.addProjectButton.addEventListener('click', (e) => {
		projectModal.style.display = 'block';
	})

	domVars.projectClose.addEventListener('click', (e) => {
		projectModal.style.display = 'none';
	})

	window.addEventListener('click', (e) => {
		if(e.target == projectModal) {
			projectModal.style.display = 'none';
		}
	})

	projectForm.addEventListener('submit', (e) => {
		const projectTitles = [];
		projectArray.forEach(function(item) {
			projectTitles.push(item.name);
		})	

		if(e.target.projectTitle.value == '') {
			alert('Please enter in a Title');
			e.preventDefault();
		} else if(projectTitles.indexOf(e.target.projectTitle.value) !== -1) {
			alert('Title already exists');
			e.preventDefault();
		} else {
			e.preventDefault();
			let newProject = Project(e.target.projectTitle.value);
			let div = document.createElement('div');
			let para = document.createElement('p');
			let deleteProject = document.createElement('i');

			div.classList.add('projectDiv');
			deleteProject.classList.add('icon-trash');

			div.appendChild(para);
			div.appendChild(deleteProject);
			para.innerHTML = newProject.name;

			projectContent.insertBefore(div, projectContent.childNodes[0])
			projectArray.push(newProject);
			newProject.id = projectArray.indexOf(newProject);
			div.setAttribute('id', newProject.id);
			div.addEventListener('click', (e) => {
				projectFlag = newProject.name;
				changeFlag();			
			})
			deleteProject.addEventListener('click', (e) => {
				e.stopPropagation();
				newProject.list = [];
				showTodos(newProject.list);
				projectArray.splice(div.id, 1);
				projectContent.removeChild(div);
				console.log(projectFlag);
			})
			projectModal.style.display = 'none';
			projectForm.reset();
			projectFlag = newProject.name;
			changeFlag();
		}
	})

	todoForm.addEventListener('submit', (e) => {
		e.preventDefault();
		let title = e.target.todoTitle.value;
		let description = e.target.todoDescription.value;
		let due = e.target.dueDate.value;
		let priority = e.target.todoPriority.value;

		if(title == '' || description == '' || due == '' || priority == '') {
			e.preventDefault();
			alert('Please fill out all required fields');
		} else {
			const project = projectArray.find(item => item.name == projectFlag);
			addTodos(project, e.target);
		}
	})

})();

export default projectDom
	