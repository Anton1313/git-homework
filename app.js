const page = {
	input1: document.getElementById('first'),
	input2: document.getElementById('second'),
	result: document.getElementById('result'),
}

function getValues(){
	return {
		value1:page.input1.value,
		value2:page.input2.value
	}
}

function resetValues(){
	page.input1.value = ""
	page.input2.value = ""
}


function add() {
	page.result.value = Number(getValues().value1) + Number(getValues().value2)
	resetValues()
}
function minus() {
	page.result.value = Number(getValues().value1) - Number(getValues().value2)
	resetValues()
}
function umn() {
	page.result.value = Number(getValues().value1) * Number(getValues().value2)
	resetValues()
}
function razd() {
	page.result.value = Number(getValues().value1) / Number(getValues().value2)
	resetValues()
}