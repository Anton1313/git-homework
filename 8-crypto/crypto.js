function crypto (str) {
	let part1 = str.slice(0,4).split('').reverse().join('')
	const part2 = str.slice(4); // "word"
const part2Rearranged = part2[part2.length-1] + part2.slice(1,3) + part2[0]

return part1 + part2Rearranged
}

function check(secretP, cleanP){
	return crypto(cleanP) === secretP
}


console.log(crypto('password'))
console.log(check('ssapdorw', 'password')) 
console.log(check('wordpass', 'password'))

