const Project = (title) => {
	const getName = () => title;
	let list = [];
	let id = 0;

	return {
		getName,
		list,
		id
	}
}

export default Project