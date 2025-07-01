const hasLicense = true;
const age = 18;
const isDrunk = false

const canDrive = (age >= 18)
	&& hasLicense
	&& !isDrunk

console.log(`${canDrive ? 'может' : 'не может'}`)
