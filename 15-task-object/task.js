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