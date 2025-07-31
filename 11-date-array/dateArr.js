const arr = [
	'10-02-2022', 
	'тест', 
	'11/12/2023', 
	'00/13/2022', 
	'41/12/2023']

	const newArr = []

	function dateArr (array){
		array.filter(el => el.length = 10).map(el => {
			const day = el.slice(0,2)
			const month = el.slice(3,5)
			const year = el.slice(6,el.length)
	
			if(year !== NaN){
				if ((day > 0) && (day <= 31)){
					if((month > 0) && (month <= 12)){
						const res = `${day}-${month}-${year}`
						newArr.push(res)
					}
				}
			}
		})
		return newArr
	}



	console.log(dateArr(arr))