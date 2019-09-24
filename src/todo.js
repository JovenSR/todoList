const Todo = (title, description, date, priority) => {

	const todoTitle = title;
	const todoDescription = description;
	const todoDate = date;
	const todoPriority = priority;

	return {
		todoTitle,
		todoDescription,
		todoDate,
		todoPriority
	}
}

export default Todo