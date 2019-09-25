const domVars = (() => {
	const addProjectButton = document.querySelector('#addProject');
	const addTodoButton = document.querySelector('#addTodo');
	const projectModal = document.querySelector('#projectModal');
	const todoModal = document.querySelector('#todoModal');
	const projectForm = document.querySelector('#projectForm');
	const todoForm = document.querySelector('#todoForm');
	const projectContent = document.querySelector('#projectContent');
	const todoContent = document.querySelector('#todoContent');
	const projectClose = document.querySelector('.projectClose');
	const todoClose = document.querySelector('.todoClose');

	return {
		addProjectButton,
		addTodoButton,
		projectModal,
		todoModal,
		projectForm,
		todoForm,
		projectContent,
		todoContent,
		projectClose,
		todoClose
	}
})();

export default domVars