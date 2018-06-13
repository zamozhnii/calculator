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

let cnt = 0;
let dot = 0;


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
});

backspace.addEventListener('click', () => {
	let childScreen = screen.childNodes;
	if(childScreen.length > 0) {
		screen.removeChild(childScreen[childScreen.length-1]);
		cnt--;
	}
});

oneDivideBy.addEventListener('click', (e) => {
	let action = e.target.value;
	let number = getNumber(screen);
	let params = 'action= ' + action + '&' + 'number= ' + number;
	ajaxPost(params);
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
