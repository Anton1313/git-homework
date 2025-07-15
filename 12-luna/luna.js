function luna(card) {
	const cleanCard = card.replaceAll('-','').split('')
	console.log(cleanCard)
	const lunaCard =  cleanCard.map((num,i) => {
		if(i % 2 === 0){
			if ((Number(num) * 2) < 9){
				num = Number(num) * 2
			} else {
				num = (Number(num) * 2) - 9
			}
		}
		return num
	})
	const lunaIndex = lunaCard.reduce((acc,num) => acc += Number(num),0)

	return lunaIndex % 10 === 0
}