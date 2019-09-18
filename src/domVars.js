const domVars = (() => {
	const addProjectButton = document.querySelector('#addProject');
	const addTodoButton = document.querySelector('#addTodo');
	const projectModal = document.querySelector('#projectModal');
	const form = document.querySelector('#projectForm');
	const projectContent = document.querySelector('#projectContent');

	return {
		addProjectButton,
		addTodoButton,
		projectModal,
		projectForm,
		projectContent
	}
})();

export default domVars