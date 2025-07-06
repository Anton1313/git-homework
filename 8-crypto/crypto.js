function crypto (str) {
	let part1 = str.split('').slice(0,str.length/2).reverse().join('')
	let tempPart2 = str.split('').slice(str.length/2,str.length)

	let popEl = tempPart2.pop()
	let shiftEl = tempPart2.shift()
	tempPart2.unshift(popEl)
	tempPart2.push(shiftEl)
	let part2 = tempPart2.join('')
	return part1 + part2
}

function check(secretP, cleanP){
	return crypto(cleanP) === secretP
}


console.log(crypto('password'))
console.log(check('ssapdorw', 'password')) 
console.log(check('wordpass', 'password'))

