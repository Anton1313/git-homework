function converter(str){
	let array = str.split(' ')

	function getTax(val1,val2){
		switch (true) {
			case ((val1==='руб') && (val2==='$')):
				return 0.013;
			case ((val1==='$') && (val2==='руб')):
				return 80;
			case ((val1==='$') && (val2==='€')):
				return 0.85;
			case ((val1==='€') && (val2==='$')):
				return 1.18;
			case ((val1==='€') && (val2==='руб')):
				return 100;
			case ((val1==='руб') && (val2==='€')):
				return 0.011;
			default:
				return null
		}
	}
	
	let tax = getTax(array[1], array[2]);
	
	if (tax) {
		return array[0] * tax
	}
	 return tax
}