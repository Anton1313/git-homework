function crypto (str) {
	return str.split('').reverse().join('')
}

function check(secretP, cleanP){
	return crypto(cleanP) === secretP
}


console.log(crypto('password'))
console.log(check('drowssap', 'password'))
console.log(check('wordpass', 'password'))

