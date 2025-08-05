const toDoList = {
	tasks:[
		{
			id:1,
			title:'title1',
			priority:2,
		}
	],

	addTask(id,title,priority){
		this.tasks.push({id,title,priority})
	},
	deleteTask(id){
		this.tasks = this.tasks.filter(el => el.id !== id)

	},
	updateTask(updatedInfo,id){
		this.tasks.map(el => {
			if (el.id === id){
				typeof updatedInfo === 'number'
				? el.priority = updatedInfo
				: el.title = updatedInfo
			}
		})
	},
	sortByPriority(){
		this.tasks.sort((a,b) => a.priority - b.priority)
	}
}



const newTask = {
	tasks: [{ 
	id: 1, 
	name: 'тест', 
	description: 'описание',
	order: 0
	}]
}

const addNewTask = toDoList.addTask.bind(newTask)
const deleteNewTask = toDoList.deleteTask.bind(newTask)
const sortNewTask = toDoList.sortByPriority.bind(newTask)
const updateNewTask = toDoList.updateTask.bind(newTask)

addNewTask(44,'55',66)
console.log(newTask)

sortNewTask()
console.log(newTask)

updateNewTask('tyt',44)
console.log(newTask) 

deleteNewTask(44)
console.log(newTask)

