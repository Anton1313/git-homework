const obj = {
    search: "Вася",
    take: 10,
}

function str(object) {
	const arr = Object.entries(object)

	arr.map(element => {
		return `${element[0]}=${element[1]}`	
		})
	
	let result = `?${arr[0]}&${arr[1]}`.replaceAll(',','=')
	
	return result
}

console.log(str(obj))