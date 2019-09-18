import domVars from './domVars'
import Project from './project'


const domMethods = (() => {
	const projectArray = [];
	const projectModal = domVars.projectModal;
	const projectForm = domVars.projectForm;
	const projectContent = domVars.projectContent;

	const defaultProject = Project('Default');
	let div = document.createElement('div');
	div.innerHTML = defaultProject.getName();
	div.classList.add('projectDiv');
	projectContent.appendChild(div);
	projectArray.push(defaultProject.getName());
	defaultProject.id = projectArray.indexOf(defaultProject.getName());
	console.log(defaultProject.id);
	div.setAttribute('id', defaultProject.id);

	domVars.addProjectButton.addEventListener('click', (e) => {
		if(projectModal.style.display === 'none') {
			projectModal.style.display = 'grid';
		} else {
			projectModal.style.display = 'none';
		}
	})

	projectForm.addEventListener('submit', (e) => {
		if(e.target.projectTitle.value == '') {
			alert('Please enter in a Title');
			e.preventDefault();
		} else if(projectArray.indexOf(e.target.projectTitle.value) !== -1) {
			alert('Title already exists');
			e.preventDefault();
		} else {
			e.preventDefault();
			let newProject = Project(e.target.projectTitle.value);
			let div = document.createElement('div');
			div.classList.add('projectDiv');
			div.innerHTML = newProject.getName();
			projectContent.appendChild(div);
			projectArray.push(newProject.getName());
			newProject.id = projectArray.indexOf(newProject.getName());
			div.setAttribute('id', newProject.id);
			console.log(newProject.id);
			projectModal.style.display = 'none';
			projectForm.reset();
			console.log(projectContent);
		}
	})



	domVars.addTodoButton.addEventListener('click', (e) => {
		alert('clicked on todo');
	})
})();

export default domMethods
	