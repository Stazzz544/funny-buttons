const calculator = document.querySelector('.calc_wrapper')
calculator.onclick = calcSwitchOn
let isfocusInApp = false
const display = document.querySelector('.calc_display');
const allBtns = document.querySelectorAll('.calc-button');


function consol(){
	console.log('test')
}

function calcSwitchOn (event) {
	const target = event.target;
	switchOnCulculator(display, allBtns);

	if(!(isfocusInApp)){
		focusButton('5', allBtns);
		isfocusInApp = true
	}
	

	if (target.classList.contains('calc-button') && 
	  !(target.classList.contains('focus'))) {
		removeAllfocus(allBtns)
		target.classList.add('focus')
	}
	

}

function switchOnCulculator(display, buttons){
	console.log('switchOnCulculator')
	display.classList.add('active')
	buttons.forEach(button => {button.classList.add('active')})
}

function focusButton(btnId, allBtns){
	removeAllfocus(allBtns)
	document.getElementById(`${btnId}`).classList.add('focus')
}

function arrowKeyBoard(){
	const allBtns = document.querySelectorAll('.calc-button')
}

function removeAllfocus(buttons){
	buttons.forEach(button => button.classList.remove('focus'))
}

document.addEventListener('keydown', function(event) {
	const key = event.code
	const activeKey = document.querySelector('.focus').textContent

	console.log(key)
	if (key === 'ArrowUp' && activeKey === '1') focusButton('1', allBtns)
	if (key === 'ArrowDown' && activeKey === '1') focusButton('4', allBtns)
	if (key === 'ArrowRight' && activeKey === '1') focusButton('2', allBtns)
	if (key === 'ArrowLeft' && activeKey === '1') focusButton('1', allBtns)

	if (key === 'ArrowUp' && activeKey === '2') focusButton('2', allBtns)
	if (key === 'ArrowDown' && activeKey === '2') focusButton('5', allBtns)
	if (key === 'ArrowRight' && activeKey === '2') focusButton('3', allBtns)
	if (key === 'ArrowLeft' && activeKey === '2') focusButton('1', allBtns)

	if (key === 'ArrowUp' && activeKey === '3') focusButton('3', allBtns)
	if (key === 'ArrowDown' && activeKey === '3') focusButton('6', allBtns)
	if (key === 'ArrowRight' && activeKey === '3') focusButton('3', allBtns)
	if (key === 'ArrowLeft' && activeKey === '3') focusButton('2', allBtns)

	if (key === 'ArrowUp' && activeKey === '4') focusButton('1', allBtns)
	if (key === 'ArrowDown' && activeKey === '4') focusButton('7', allBtns)
	if (key === 'ArrowRight' && activeKey === '4') focusButton('5', allBtns)
	if (key === 'ArrowLeft' && activeKey === '4') focusButton('4', allBtns)

	if (key === 'ArrowUp' && activeKey === '5') focusButton('2', allBtns)
	if (key === 'ArrowDown' && activeKey === '5') focusButton('8', allBtns)
	if (key === 'ArrowRight' && activeKey === '5') focusButton('6', allBtns)
	if (key === 'ArrowLeft' && activeKey === '5') focusButton('4', allBtns)

	if (key === 'ArrowUp' && activeKey === '6') focusButton('3', allBtns)
	if (key === 'ArrowDown' && activeKey === '6') focusButton('9', allBtns)
	if (key === 'ArrowRight' && activeKey === '6') focusButton('6', allBtns)
	if (key === 'ArrowLeft' && activeKey === '6') focusButton('5', allBtns)

	if (key === 'ArrowUp' && activeKey === '7') focusButton('4', allBtns)
	if (key === 'ArrowDown' && activeKey === '7') focusButton('7', allBtns)
	if (key === 'ArrowRight' && activeKey === '7') focusButton('8', allBtns)
	if (key === 'ArrowLeft' && activeKey === '7') focusButton('7', allBtns)

	if (key === 'ArrowUp' && activeKey === '8') focusButton('5', allBtns)
	if (key === 'ArrowDown' && activeKey === '8') focusButton('8', allBtns)
	if (key === 'ArrowRight' && activeKey === '8') focusButton('9', allBtns)
	if (key === 'ArrowLeft' && activeKey === '8') focusButton('7', allBtns)

	if (key === 'ArrowUp' && activeKey === '9') focusButton('6', allBtns)
	if (key === 'ArrowDown' && activeKey === '9') focusButton('9', allBtns)
	if (key === 'ArrowRight' && activeKey === '9') focusButton('9', allBtns)
	if (key === 'ArrowLeft' && activeKey === '9') focusButton('8', allBtns)

	if (key === 'Enter') numToDisplay(activeKey)

 });

function numToDisplay(activeKey){
	display.innerHTML += activeKey
}

window.addEventListener("keydown", function(e) {
	// space and arrow keys
	if ([38, 40].indexOf(e.keyCode) > -1) {
	  e.preventDefault();
	}
 }, false);

 //ArrowUp
//ArrowDown
//ArrowRight
//ArrowLeft