const arr = [
	'10-02-2022', 
	'тест', 
	'11/12/2023', 
	'00/13/2022', 
	'41/12/2023']

	arr.map(el => {
		const day = el[0]+el[1]
		const month = el[3]+el[4]
		const year = el[6]+el[7]+el[8]+el[9]

		if(year !== NaN){
			if ((day > 0) && (day <= 31)){
				if((month > 0) && (month <= 12)){
					const res = `${day}-${month}-${year}`
					console.log('res = ',res)
				}
			}
		}
	})