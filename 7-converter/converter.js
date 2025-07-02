function converter(sum, input, output){
	function getTax(val1,val2){
		switch (true) {
			case (val1===val2): {
				return 1;
			}
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
	
	let tax = getTax(input, output);
	
	if (tax) {
		return sum * tax
	}
	 return tax
}