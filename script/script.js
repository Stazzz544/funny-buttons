const calculator = document.querySelector('.calc_wrapper')
calculator.onclick = calcSwitchOn;
const display = document.querySelector('.calc-display');
const calcDisplaySpan = document.querySelector('.calc-display-span');
const allBtns = document.querySelectorAll('.calc-button');
const displayResult = document.querySelector('.calc-result');
const calcNumbersSpan = document.querySelector('.calc-span');

const calcParams = {
	isfocusInApp: false,
}

function calcSwitchOn (event) {
	const target = event.target;
	switchOnCulculator(display, allBtns);

	if(!(calcParams.isfocusInApp)){
		focusButton('5', allBtns);
		calcParams.isfocusInApp = true;
	}
	if (target.classList.contains('calc-button') && !(target.classList.contains('focus'))) {
		removeAllfocus(allBtns);
		target.classList.add('focus');
	}
}

function switchOnCulculator(display, buttons){
	(displayResult.textContent.length < 1) ? displayResult.textContent = 0 : false;
	console.log('switchOnCulculator');
	display.classList.add('active');
	buttons.forEach(button => {button.classList.add('active')});
}

function focusButton(btnId, allBtns){
	removeAllfocus(allBtns);
	document.getElementById(`${btnId}`).classList.add('focus');
}

function removeAllfocus(buttons){
	buttons.forEach(button => button.classList.remove('focus'));
}

document.addEventListener('keydown', function(event) {
	const key = event.code;
	const activeKey = document.querySelector('.focus').textContent;

	if (key === 'ArrowUp' && activeKey === '1') focusButton('1', allBtns);
	if (key === 'ArrowDown' && activeKey === '1') focusButton('4', allBtns);
	if (key === 'ArrowRight' && activeKey === '1') focusButton('2', allBtns);
	if (key === 'ArrowLeft' && activeKey === '1') focusButton('1', allBtns);

	if (key === 'ArrowUp' && activeKey === '2') focusButton('2', allBtns);
	if (key === 'ArrowDown' && activeKey === '2') focusButton('5', allBtns);
	if (key === 'ArrowRight' && activeKey === '2') focusButton('3', allBtns);
	if (key === 'ArrowLeft' && activeKey === '2') focusButton('1', allBtns);

	if (key === 'ArrowUp' && activeKey === '3') focusButton('3', allBtns);
	if (key === 'ArrowDown' && activeKey === '3') focusButton('6', allBtns);
	if (key === 'ArrowRight' && activeKey === '3') focusButton('+', allBtns);
	if (key === 'ArrowLeft' && activeKey === '3') focusButton('2', allBtns);

	if (key === 'ArrowUp' && activeKey === '+') focusButton('+', allBtns);
	if (key === 'ArrowDown' && activeKey === '+') focusButton('*', allBtns);
	if (key === 'ArrowRight' && activeKey === '+') focusButton('+', allBtns);
	if (key === 'ArrowLeft' && activeKey === '+') focusButton('3', allBtns);

	if (key === 'ArrowUp' && activeKey === '4') focusButton('1', allBtns);
	if (key === 'ArrowDown' && activeKey === '4') focusButton('7', allBtns);
	if (key === 'ArrowRight' && activeKey === '4') focusButton('5', allBtns);
	if (key === 'ArrowLeft' && activeKey === '4') focusButton('4', allBtns);

	if (key === 'ArrowUp' && activeKey === '5') focusButton('2', allBtns);
	if (key === 'ArrowDown' && activeKey === '5') focusButton('8', allBtns);
	if (key === 'ArrowRight' && activeKey === '5') focusButton('6', allBtns);
	if (key === 'ArrowLeft' && activeKey === '5') focusButton('4', allBtns);

	if (key === 'ArrowUp' && activeKey === '6') focusButton('3', allBtns);
	if (key === 'ArrowDown' && activeKey === '6') focusButton('9', allBtns);
	if (key === 'ArrowRight' && activeKey === '6') focusButton('*', allBtns);
	if (key === 'ArrowLeft' && activeKey === '6') focusButton('5', allBtns);

	if (key === 'ArrowUp' && activeKey === '*') focusButton('+', allBtns);
	if (key === 'ArrowDown' && activeKey === '*') focusButton('/', allBtns);
	if (key === 'ArrowRight' && activeKey === '*') focusButton('*', allBtns);
	if (key === 'ArrowLeft' && activeKey === '*') focusButton('6', allBtns);

	if (key === 'ArrowUp' && activeKey === '7') focusButton('4', allBtns);
	if (key === 'ArrowDown' && activeKey === '7') focusButton('AC', allBtns);
	if (key === 'ArrowRight' && activeKey === '7') focusButton('8', allBtns);
	if (key === 'ArrowLeft' && activeKey === '7') focusButton('7', allBtns);

	if (key === 'ArrowUp' && activeKey === '8') focusButton('5', allBtns);
	if (key === 'ArrowDown' && activeKey === '8') focusButton('0', allBtns);
	if (key === 'ArrowRight' && activeKey === '8') focusButton('9', allBtns);
	if (key === 'ArrowLeft' && activeKey === '8') focusButton('7', allBtns);

	if (key === 'ArrowUp' && activeKey === '9') focusButton('6', allBtns);
	if (key === 'ArrowDown' && activeKey === '9') focusButton('.', allBtns);
	if (key === 'ArrowRight' && activeKey === '9') focusButton('/', allBtns);
	if (key === 'ArrowLeft' && activeKey === '9') focusButton('8', allBtns);

	if (key === 'ArrowUp' && activeKey === '/') focusButton('*', allBtns);
	if (key === 'ArrowDown' && activeKey === '/') focusButton('-', allBtns);
	if (key === 'ArrowRight' && activeKey === '/') focusButton('/', allBtns);
	if (key === 'ArrowLeft' && activeKey === '/') focusButton('9', allBtns);

	if (key === 'ArrowUp' && activeKey === 'AC') focusButton('7', allBtns);
	if (key === 'ArrowDown' && activeKey === 'AC') focusButton('del', allBtns);
	if (key === 'ArrowRight' && activeKey === 'AC') focusButton('0', allBtns);
	if (key === 'ArrowLeft' && activeKey === 'AC') focusButton('AC', allBtns);

	if (key === 'ArrowUp' && activeKey === '0') focusButton('8', allBtns);
	if (key === 'ArrowDown' && activeKey === '0') focusButton('del', allBtns);
	if (key === 'ArrowRight' && activeKey === '0') focusButton('.', allBtns);
	if (key === 'ArrowLeft' && activeKey === '0') focusButton('AC', allBtns);

	if (key === 'ArrowUp' && activeKey === '.') focusButton('9', allBtns);
	if (key === 'ArrowDown' && activeKey === '.') focusButton('=', allBtns);
	if (key === 'ArrowRight' && activeKey === '.') focusButton('-', allBtns);
	if (key === 'ArrowLeft' && activeKey === '.') focusButton('0', allBtns);

	if (key === 'ArrowUp' && activeKey === '-') focusButton('/', allBtns);
	if (key === 'ArrowDown' && activeKey === '-') focusButton('=', allBtns);
	if (key === 'ArrowRight' && activeKey === '-') focusButton('-', allBtns);
	if (key === 'ArrowLeft' && activeKey === '-') focusButton('.', allBtns);

	if (key === 'ArrowUp' && activeKey === '=') focusButton('-', allBtns);
	if (key === 'ArrowDown' && activeKey === '=') focusButton('=', allBtns);
	if (key === 'ArrowRight' && activeKey === '=') focusButton('=', allBtns);
	if (key === 'ArrowLeft' && activeKey === '=') focusButton('del', allBtns);

	if (key === 'ArrowUp' && activeKey === 'del') focusButton('AC', allBtns);
	if (key === 'ArrowDown' && activeKey === 'del') focusButton('del', allBtns);
	if (key === 'ArrowRight' && activeKey === 'del') focusButton('=', allBtns);
	if (key === 'ArrowLeft' && activeKey === 'del') focusButton('del', allBtns);

	if (key === 'Enter') mainCalcFunction(activeKey);
});



function mainCalcFunction(activeKey) {
	
	if (calcNumbersSpan.textContent.length < 1 &&  IsMathSymbolEntered(activeKey) && activeKey !== '-') {
		console.log('I case');
		return false;
	}else if(activeKey === 'AC') {
		calcNumbersSpan.textContent = '';
		displayResult.textContent = '0';
	}else if(IsMathSymbolEntered(activeKey) && isLastvalueMathSymbol()) {
		console.log('II case');
		const string = calcNumbersSpan.textContent;
		calcNumbersSpan.textContent = changeLastSymbol(string, activeKey);
	} else if(calcNumbersSpan.textContent.length > 0 && !IsMathSymbolEntered(activeKey) && activeKey !== '=' && activeKey !== 'del') {
		console.log('III case');
		const nullAfterNull = isNullAfterNull(calcNumbersSpan.textContent, activeKey);
		nullAfterNull ? false : calcNumbersSpan.textContent += activeKey;
		isFirstSymbolZero(calcNumbersSpan.textContent) ? calcNumbersSpan.textContent = activeKey : false;
	} else if(activeKey === '=') {
		console.log('IV case');
		calcNumbersSpan.textContent = displayResult.textContent;
	} else if(activeKey === 'del') {
		console.log('V case');
		calcNumbersSpan.textContent = removeLastSymbol(calcNumbersSpan.textContent);
		(displayResult.textContent.length <= 1) ? displayResult.textContent = 0 : false;
	} else {
		console.log('else');
		calcNumbersSpan.textContent += activeKey;
	}
	showResultOnDisplay(displayResult , calcNumbersSpan.textContent);
}

function showResultOnDisplay(resultPlace, result){
	try {
		const solution = new Function (`return ${(result)}`);
		const resultNumber = parseFloat((solution()).toFixed(10));
		resultPlace.textContent = resultNumber;
	} catch { 
		return false;
	}
}

function changeLastSymbol(string, mathSymbol){
	const arr = string.split('');
	arr[arr.length-1] = mathSymbol;
	return arr.join('');
}

function IsMathSymbolEntered(activeKey){
	if (activeKey === '+' || activeKey === '-' || activeKey === '*' || activeKey === '/' || activeKey === '.') {return true};
}

function isLastvalueMathSymbol(){
	const mathNums = calcNumbersSpan.textContent;
	const lastSymbol = mathNums[mathNums.length-1];
	return IsMathSymbolEntered(lastSymbol);
}

function removeLastSymbol(string){
	const arr = string.split('');
	arr.pop();
	return arr.join('');
}

function isNullAfterNull(string, activeKey){
	const arr = string.split('');
	if (arr[arr[0]] == 0 && activeKey == 0) { return true};
	return false;
}

function isFirstSymbolZero(string) {
	if (string[0] == 0 && string[0] == 0) { return true };
}

window.addEventListener("keydown", function(e) {
	// space and arrow keys
	if ([38, 40].indexOf(e.keyCode) > -1) {
	  e.preventDefault();
	}
 }, false);

