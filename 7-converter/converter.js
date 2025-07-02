function converter(sum, input, output){
	function getTax(val1,val2){
		switch (true) {
			case ((val1==='rub') && (val2==='dol')):
				return 0.013;
			case ((val1==='dol') && (val2==='rub')):
				return 80;
			case ((val1==='dol') && (val2==='eur')):
				return 0.85;
			case ((val1==='eur') && (val2==='dol')):
				return 1.18;
			case ((val1==='eur') && (val2==='rub')):
				return 100;
			case ((val1==='rub') && (val2==='eur')):
				return 0.011;
			default:
				return null
		}
	}
	
	let tax = getTax(input, output);
	
	if (tax) {
		return sum * tax
	}
	 return tax
}