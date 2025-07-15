function luna(card) {
	const cleanCard = card.replaceAll('-','').split('').reverse()
	const lunaCard =  cleanCard.map((num,i) => {
		if(i % 2 === 1){
			if ((Number(num) * 2) > 9){
				num = (Number(num) * 2) - 9
			} else {
				num = Number(num) * 2
			}
		}
		return num
	})
	const lunaIndex = lunaCard.reduce((acc,num) => acc += Number(num),0)

	return lunaIndex % 10 === 0
}