const answer = prompt('Choose language (en, ru, de):')

switch (answer) {
	case 'en':{
		console.log('Good day!')
	}
	case 'ru':{
		console.log('Добрый день!')
	}
	case 'de':{
		console.log('Gutten tag!')
	}
	default:{
		console.log('Non-supported language')
	}
}