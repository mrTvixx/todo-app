class Todo {
	constructor() {
		this.allTasks = [];
		this.taskForRender = [];
		this.currentTab = 0; // 0 - all tasks; 1 - active; 2 - done;
	}

	initListeners = () => {
		document.getElementById('task-input')
			.addEventListener('keypress', event => event.which === 13 && this.addNewTask());

		document.getElementById('task-add-button')
			.addEventListener('click', () => this.addNewTask());
	}

	addNewTask = () => {
		const value = document.getElementById('task-input').value;
		document.getElementById('task-input').value = '';
		this.allTasks = [
			...this.allTasks,
			{
				id: Math.random().toString(32).slice(2),
				isComplite: false,
				value,
			}
		];
		this.render();
	}

	filterTasks = () => {
		this.taskForRender = this.allTasks;
	}

	clearTaskNode = () => {
		const myNode = document.getElementById("tasks-list");
		while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		}
	}

	render = () => {
		this.filterTasks();
		this.clearTaskNode();
		const tasksList = this.taskForRender;
		for (let index = 0; index < tasksList.length; index++) {
			const task = document.createElement('div');
			task.id = tasksList[index].id;
			task.innerText = tasksList[index].value;
			document.getElementById('tasks-list').appendChild(task);
		}
	}
}

const newTodoProject = new Todo();
newTodoProject.initListeners();