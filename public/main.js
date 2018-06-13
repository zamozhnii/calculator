const d = document;

// BUTTONS WITH NUMBERS
const allInputs = d.querySelectorAll('.number');

// DISPLAY
const screen = d.querySelector('.screen');

// BUTTON CLEAR
const clear = d.querySelector('.btn_c');

// BUTTON BACKSPACE
const backspace = d.querySelector('.backspace');

// BUTTON 1/x
const oneDivideBy = d.querySelector('.one-divide-by');

// BUTTON +-
const plusMinus = d.querySelector('.plus-minus');

// BUTTON SQRT
const sqrt = d.querySelector('.sqrt');

// BUTTONS ACTION WITH TWO NUMBERS
const btnsTwoNums = d.querySelectorAll('.action-with-two-num');

// BUTTON EQUALLY
const equally = d.querySelector('.btn_equally');

let cnt = 0;
let dot = 0;
let tmpNumber;
let tmpAction;

allInputs.forEach( el => el.addEventListener('click', (e) => {
	if(cnt < 12) {
		let target = e.target;
		
		if(target.value === '.' && dot === 0) {
			screen.appendChild(d.createTextNode(target.value));
			cnt++;
			dot = 1;
			
		}
		
		if(target.value != '.' && screen.appendChild(d.createTextNode(target.value))) {
			cnt++;
		}
	}
}));

clear.addEventListener('click', () => {
	screen.innerHTML = '';
	cnt = 0;
	dot = 0;
});

backspace.addEventListener('click', () => {
	let childScreen = screen.childNodes;
	if(childScreen.length > 0) {
		if(childScreen[childScreen.length-1].textContent === '.') {
			dot = 0;
		}
		screen.removeChild(childScreen[childScreen.length-1]);
		cnt--;
	}
});

oneDivideBy.addEventListener('click', (e) => {
	let action = e.target.value;
	let number = getNumber(screen);
	let params = 'action=' + action + '&' + 'number=' + number;
	ajaxPost(params);
});

plusMinus.addEventListener('click', (e) => {
	let action = e.target.value;
	let number = getNumber(screen);
	let params = 'action=' + action + '&' + 'number=' + number;
	ajaxPost(params);
});

sqrt.addEventListener('click', (e) => {
	let action = e.target.value;
	let number = getNumber(screen);
	let params = 'action=' + action + '&' + 'number=' + number;
	ajaxPost(params);
});

btnsTwoNums.forEach(el => el.addEventListener('click', (e) => {
	tmpAction = e.target.value;
	tmpNumber = getNumber(screen);
	screen.innerHTML = '';
	cnt = 0;
	dot = 0;
}));



equally.addEventListener('click', (e) => {
	let numberTwo = getNumber(screen);
	let params = 'action=' + tmpAction + '&' + 'number=' 
		+ tmpNumber + '&' + 'numberTwo=' + numberTwo;
	ajaxPost(params);
	tmpNumber = '';
	tmpAction = '';
});


function getNumber(screen) {
	let result = '';
	let numbers = screen.childNodes;
	numbers.forEach(el => {
		result += el.textContent;
	});
	return result;
}

function ajaxPost(params) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = () => {
        if(request.readyState == 4 && request.status == 200) {
            screen.innerHTML = request.responseText;             
		} 
    };
    request.open('POST', 'model.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(params);
}
