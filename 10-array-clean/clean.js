function filt (arr, fn){
	let arr2 = [];
	for (const el of arr){
		if (!fn(el)){
			arr2.push(el)
		}
	}
	return arr2;
}