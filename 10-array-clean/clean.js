function filt (arr, fn){
	for (const el of arr){
		if (fn(el)){
			arr.splice(arr.indexOf(el), 1)
		}
	}
	return arr;
}