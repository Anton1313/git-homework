const toDoList = {
	tasks:[
		{
			id:1,
			title:'tit',
			priority:1,
		},
	],
	addTask(task){
		this.tasks.push(task)
	},
	deleteTask(id){

	},
	updateTask(info,id){
		if (!id){
			console.log('Incorrect id')
		}

		const filteredTask = this.tasks.filter(el => el.id === id)

		typeof info === Number 
		? filteredTask.priority = info
		: filteredTask.title = info
	},
	sortTaskByPriority(){
		this.tasks.sort((a, b) => {
			a.priority - b.priority
		})
	}
}


toDoList.addTask(
	{
		id:2,
		title:'2tit',
		priority:22,
	}
)


toDoList.addTask(
	{
		id:3,
		title:'ti3t',
		priority:10,
	}
)

toDoList.updateTask(4,3)
toDoList.updateTask('tit2',2)
toDoList.updateTask('test',23)

console.log(toDoList)