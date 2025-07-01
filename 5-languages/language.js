const answer = prompt('Choose language (en, ru, de):')

switch (answer) {
	case 'en':{
		console.log('Good day!')
		break;
	}
	case 'ru':{
		console.log('Добрый день!')
		break;
	}
	case 'de':{
		console.log('Gutten tag!')
		break;
	}
	default:{
		console.log('Non-supported language')
	}
}