// we get start,stop and reset button using getElementId

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// we create and intialized hour,minute,second and count

let hour = 00;
let minute = 00
let second = 00;
let count = 00;

// here is the addEventListener
// here we assigned boolean values in inside function 
//the boolean values are used later

startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', function () {
	timer = false;
});

resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
});

//Here is the main function when we click on start button function starts 
//then first if condtion checks timer is true then excute the below function
//when we click on stop it will stop the time 
//wehn we click on reset button it will go to again initail value "0"

function stopWatch() {
	if (timer) {
		count++;

		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		//the hrString,minString,secString and countString are used to show
		//the timer on screen

		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;

		//in the belowe condition we get before zero like 01,02,03..... not like 1,2,3....

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

		if (count < 10) {
			countString = "0" + countString;
		}

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;
		setTimeout(stopWatch, 10);
	}
}
