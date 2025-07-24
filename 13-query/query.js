const obj = {
    search: "Вася",
    take: 10,
}

function str(object) {
	const arr = Object.entries(object)

	const mappedArr = arr.map(element => {
		return `${element[0]}=${element[1]}`
		})
	
	let result = mappedArr.join('&')
	
	return result
}

console.log(str(obj))