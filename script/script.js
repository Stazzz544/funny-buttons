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


function keyBoardLestener(key, activeKey, keyCheck,up, down, right, left) {
	if (key === 'ArrowUp' && activeKey === keyCheck) focusButton(up, allBtns)
	if (key === 'ArrowDown' && activeKey === keyCheck) focusButton(down, allBtns);
	if (key === 'ArrowRight' && activeKey === keyCheck) focusButton(right, allBtns);
	if (key === 'ArrowLeft' && activeKey === keyCheck) focusButton(left, allBtns);
}

document.addEventListener('keydown', function(event) {
	const key = event.code;
	const activeKey = document.querySelector('.focus').textContent;

	keyBoardLestener(key, activeKey, '1','1','4','2','1')
	keyBoardLestener(key, activeKey, '2','2','5','3','1')
	keyBoardLestener(key, activeKey, '3','3','6','+','2')
	keyBoardLestener(key, activeKey, '+','+','*','+','3')
	keyBoardLestener(key, activeKey, '4','1','7','5','4')
	keyBoardLestener(key, activeKey, '5','2','8','6','4')
	keyBoardLestener(key, activeKey, '6','3','9','*','5')
	keyBoardLestener(key, activeKey, '*','+','/','*','6')
	keyBoardLestener(key, activeKey, '7','4','AC','8','7')
	keyBoardLestener(key, activeKey, '8','5','0','9','7')
	keyBoardLestener(key, activeKey, '9','6','.','/','8')
	keyBoardLestener(key, activeKey, '/','*','-','/','9')
	keyBoardLestener(key, activeKey, 'AC','7','del','0','AC')
	keyBoardLestener(key, activeKey, '0','8','del','.','AC')
	keyBoardLestener(key, activeKey, '.','9','=','-','0')
	keyBoardLestener(key, activeKey, '-','/','=','-','.')
	keyBoardLestener(key, activeKey, '=','-','=','=','del')
	keyBoardLestener(key, activeKey, 'del','AC','del','=','del')

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
		(resultNumber == Infinity) ? resultPlace.textContent = 'Wrong operation...' : resultPlace.textContent = resultNumber;
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

