const calculator = document.querySelector('.calc_wrapper')
calculator.onclick = calcSwitchOn

function calcSwitchOn () {
	const display = document.querySelector('.calc_display')
	const allBtns = document.querySelectorAll('.calc-button')
	
	display.classList.add('active')
	allBtns.forEach(button => {button.classList.add('active')})

	const startBtn = document.getElementById('5')
	console.log(startBtn)
	startBtn.focus()

	if(display.classList.contains('active')){
		//arrowKeyBoard(allBtns)
	}
}

function arrowKeyBoard(){
	const allBtns = document.querySelectorAll('.calc-button')
	
}