const calculator = document.querySelector('.calc_wrapper')
calculator.onclick = calcSwitchOn;
const display = document.querySelector('.calc-display');
const calcDisplaySpan = document.querySelector('.calc-display-span');
const allBtns = document.querySelectorAll('.calc-button');
const displayResult = document.querySelector('.calc-result');
const calcNumbersSpan = document.querySelector('.calc-span');

const calcParams = {
	timerToOffValue: 30,
	timerToOff: 30,
	isfocusInApp: false,
	calcNav: [
		{ keyCheck: '1', up: '1', down: '4', right: '2', left: '1' },
		{ keyCheck: '2', up: '2', down: '5', right: '3', left: '1' },
		{ keyCheck: '3', up: '3', down: '6', right: '+', left: '2' },
		{ keyCheck: '+', up: '+', down: '*', right: '+', left: '3' },
		{ keyCheck: '4', up: '1', down: '7', right: '5', left: '4' },
		{ keyCheck: '5', up: '2', down: '8', right: '6', left: '4' },
		{ keyCheck: '6', up: '3', down: '9', right: '*', left: '5' },
		{ keyCheck: '*', up: '+', down: '/', right: '*', left: '6' },
		{ keyCheck: '7', up: '4', down: 'AC', right: '8', left: '7' },
		{ keyCheck: '8', up: '5', down: '0', right: '9', left: '7' },
		{ keyCheck: '9', up: '6', down: '.', right: '/', left: '8' },
		{ keyCheck: '/', up: '*', down: '-', right: '/', left: '9' },
		{ keyCheck: '+', up: '+', down: '*', right: '+', left: '3' },
		{ keyCheck: 'AC', up: '7', down: 'del', right: '0', left: 'AC' },
		{ keyCheck: '0', up: '8', down: 'del', right: '.', left: 'AC' },
		{ keyCheck: '.', up: '9', down: '=', right: '-', left: '0' },
		{ keyCheck: '-', up: '/', down: '=', right: '-', left: '.' },
		{ keyCheck: '=', up: '-', down: '=', right: '=', left: 'del' },
		{ keyCheck: 'del', up: 'AC', down: 'del', right: '=', left: 'del' },
	],
	calcTimerStart(){
		this.timerToOff -= 1
	}
}

function calcSwitchOn(event) {
	calcOffTimerClear('off')
	calcOffTimer();
	const target = event.target;
	switchOnCulculator(display, allBtns);

	if (!(calcParams.isfocusInApp)) {
		focusButton('5', allBtns);
		calcParams.isfocusInApp = true;
	}
	if (target.classList.contains('calc-button') && !(target.classList.contains('focus'))) {
		removeAllfocus(allBtns);
		target.classList.add('focus');
	}
}

function switchOnCulculator(display, buttons) {
	(displayResult.textContent.length < 1) ? displayResult.textContent = 0 : false;
	console.log('switchOnCulculator');
	display.classList.add('active');
	buttons.forEach(button => { button.classList.add('active') });
}

function focusButton(btnId, allBtns) {
	removeAllfocus(allBtns);
	document.getElementById(`${btnId}`).classList.add('focus');
}

function removeAllfocus(buttons) {
	buttons.forEach(button => button.classList.remove('focus'));
}


function keyBoardLestener(key, activeKey) {
	calcParams.calcNav.forEach(params => {
		if (key === 'ArrowUp' && activeKey === params.keyCheck) focusButton(params.up, allBtns)
		if (key === 'ArrowDown' && activeKey === params.keyCheck) focusButton(params.down, allBtns);
		if (key === 'ArrowRight' && activeKey === params.keyCheck) focusButton(params.right, allBtns);
		if (key === 'ArrowLeft' && activeKey === params.keyCheck) focusButton(params.left, allBtns);
	})
}

document.addEventListener('keydown', function (event) {
	calcParams.timerToOff = calcParams.timerToOffValue
	const key = event.code;
	const activeKey = document.querySelector('.focus').textContent;
	keyBoardLestener(key, activeKey)
	if (key === 'Enter') mainCalcFunction(activeKey);
});

function mainCalcFunction(activeKey) {
	if (calcNumbersSpan.textContent.length < 1 && IsMathSymbolEntered(activeKey) && activeKey !== '-') {
		console.log('I case');
		return false;
	} else if (activeKey === 'AC') {
		calcNumbersSpan.textContent = '';
		displayResult.textContent = '0';
	} else if (IsMathSymbolEntered(activeKey) && isLastvalueMathSymbol()) {
		console.log('II case');
		const string = calcNumbersSpan.textContent;
		calcNumbersSpan.textContent = changeLastSymbol(string, activeKey);
	} else if (calcNumbersSpan.textContent.length > 0 && !IsMathSymbolEntered(activeKey) && activeKey !== '=' && activeKey !== 'del') {
		console.log('III case');
		const nullAfterNull = isNullAfterNull(calcNumbersSpan.textContent, activeKey);
		nullAfterNull ? false : calcNumbersSpan.textContent += activeKey;
		isFirstSymbolZero(calcNumbersSpan.textContent) ? calcNumbersSpan.textContent = activeKey : false;
	} else if (activeKey === '=') {
		console.log('IV case');
		calcNumbersSpan.textContent = displayResult.textContent;
	} else if (activeKey === 'del') {
		console.log('V case');
		calcNumbersSpan.textContent = removeLastSymbol(calcNumbersSpan.textContent);
		(displayResult.textContent.length <= 1) ? displayResult.textContent = 0 : false;
	} else {
		console.log('else');
		calcNumbersSpan.textContent += activeKey;
	}

	document.getElementById(activeKey).classList.add('checked')

	showResultOnDisplay(displayResult, calcNumbersSpan.textContent);
}

function showResultOnDisplay(resultPlace, result) {
	setTimeout(() => {
		allBtns.forEach(btn => {
			btn.classList.remove('checked')
		})
	}, 170)
	try {
		const solution = new Function(`return ${(result)}`);
		const resultNumber = parseFloat((solution()).toFixed(10));
		(resultNumber == Infinity) ? resultPlace.textContent = 'Wrong operation...' : resultPlace.textContent = resultNumber;
	} catch {
		return false;
	}
}

function changeLastSymbol(string, mathSymbol) {
	const arr = string.split('');
	arr[arr.length - 1] = mathSymbol;
	return arr.join('');
}

function IsMathSymbolEntered(activeKey) {
	if (activeKey === '+' || activeKey === '-' || activeKey === '*' || activeKey === '/' || activeKey === '.') { return true };
}

function isLastvalueMathSymbol() {
	const mathNums = calcNumbersSpan.textContent;
	const lastSymbol = mathNums[mathNums.length - 1];
	return IsMathSymbolEntered(lastSymbol);
}

function removeLastSymbol(string) {
	const arr = string.split('');
	arr.pop();
	return arr.join('');
}

function isNullAfterNull(string, activeKey) {
	const arr = string.split('');
	if (arr[arr[0]] == 0 && activeKey == 0) { return true };
	return false;
}

function isFirstSymbolZero(string) {
	if (string[0] == 0 && string[0] == 0) { return true };
}

function calcOffTimer(off){
	calcParams.timerToOff = calcParams.timerToOffValue;
	const timerToOffCalc = setInterval(() => {
		calcParams.calcTimerStart();
		console.log('before calc off: ', calcParams.timerToOff)
		calcOffTimerClear(timerToOffCalc)
	}, 1000)
	if (off = 'off') {
		calcOffTimerClear(timerToOffCalc)
	}
}

function calcOffTimerClear(timerToOffCalc) {
	if(!calcParams.timerToOff ) {
		clearInterval(timerToOffCalc);
		calcParams.timerToOff = calcParams.timerToOffValue;
		display.classList.remove('active');
		allBtns.forEach(btn => btn.classList.remove('focus'));
		displayResult.textContent = '';
		calcNumbersSpan.textContent = '';
	}
}

window.addEventListener("keydown", function (e) {
	// space and arrow keys
	if ([38, 40].indexOf(e.keyCode) > -1) {
		e.preventDefault();
	}
}, false);


