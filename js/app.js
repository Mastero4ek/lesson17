'use strict'

const name = document.querySelector('input[id=name]'),
	surname = document.querySelector('input[id=surname]'),
	age = document.querySelector('input[id=age]'),

	gender = document.querySelectorAll('input[name=gender]'),
	male = document.querySelector('input[id=male]'),
	female = document.querySelector('input[id=female]'),

	postJob = document.querySelector('select[id=postjob]'),
	position = document.querySelector('select[id=position]'),

	employment = document.querySelectorAll('input[name=employment]'),
	fullTime = document.querySelector('input[id=ft]'),
	partTime = document.querySelector('input[id=pt]'),

	formError = document.querySelectorAll('.form__label-error'),

	form = document.querySelector('.form__elements'),
	table = document.querySelector('.table__elements');

let tableBtn = document.querySelectorAll('.table__button');

let workerArr = [],
	genderCheck = '',
	positionCheck = '',
	postjobCheck = '';

const getGender = function() {
	for (let i = 0; i < gender.length; i++) {
		gender[i].addEventListener('change', () => {
			if (gender[i].type == "radio" && gender[i].checked) {
	            genderCheck = gender[i].value;
	        }
		});
    }
}

getGender();

const getPosition = function() {
	position.addEventListener('change', () => {
		let positionIndex = position.selectedIndex,
			positionOption = position.options;

		switch(true) {
			case position.value == 'fe':
			positionCheck = `${positionOption[positionIndex].textContent}`;
			break;

			case position.value == 'be':
			positionCheck = `${positionOption[positionIndex].textContent}`;
			break;

			case position.value == 'fs':
			positionCheck = `${positionOption[positionIndex].textContent}`;
			break;
		}
	});
}

getPosition();

const getPostjob = function() {
	postJob.addEventListener('change', () => {
		let postJobIndex = postJob.selectedIndex,
			postJobOption = postJob.options;

		switch(true) {
			case postJob.value == 'tra':
			postjobCheck = `${postJobOption[postJobIndex].textContent}`;

			break;

			case postJob.value == 'jun':
			postjobCheck = `${postJobOption[postJobIndex].textContent}`;

			break;

			case postJob.value == 'mid':
			postjobCheck = `${postJobOption[postJobIndex].textContent}`;

			break;

			case postJob.value == 'sen':
			postjobCheck = `${postJobOption[postJobIndex].textContent}`;

			break;
		}
	});
}

getPostjob();

const createWorker = function() {
	switch(true) {
		case postJob.value == 'tra':
			const trainee = new Trainee(name.value, surname.value, age.value, genderCheck, postjobCheck, positionCheck);
			
			trainee.addWorker(trainee);
		break;

		case postJob.value == 'jun':
			const junior = new Junior(name.value, surname.value, age.value,  genderCheck, postjobCheck, positionCheck);

			junior.addWorker(junior);
		break;

		case postJob.value == 'mid':
			const middle = new Middle(name.value, surname.value, age.value,  genderCheck, postjobCheck, positionCheck);

			middle.addWorker(middle);
		break;

		case postJob.value == 'sen':
			const senior = new Senior(name.value, surname.value, age.value,  genderCheck, postjobCheck, positionCheck);

			senior.addWorker(senior);
		break;
	}
}

const isString = function(str) {
	return typeof str == 'string' &&
		   isNaN(str) &&
		   !(str.startsWith(' ') || str.endsWith(' '));
}

const isNumber = function(num) {
	return !isNaN(parseFloat(num)) &&
		   isFinite(num) &&
		   !(num.startsWith(' ') || num.endsWith(' '));
}

const checkInputs = function() {
	if(!isString(name.value) || !isString(surname.value) || !isNumber(age.value) ||
		(!male.checked && !female.checked) || (!fullTime.checked && !partTime.checked)) {

		console.log('введите данные');
	} else {

		createWorker();
		renderWorker();
		reset();

		console.log(workerArr)
	}
}

const renderWorker = function() {
	let tableBtn = document.querySelectorAll('.table__button');

	table.innerHTML = '';

	workerArr.forEach((item) => {
		table.insertAdjacentHTML('beforeend', `
		<tr class="table__items">
			<td class="table__item">${item.name}</td>

			<td class="table__item">${item.surname}</td>

			<td class="table__item">${item.age}</td>

			<td class="table__item">${item.gender}</td>

			<td class="table__item">${item.position}</td>

			<td class="table__item">${item.postJob}</td>

			<td class="table__item">${item.salary}</td>

			<td class="table__item">
				<button type="button" class="table__button">Удалить</button>
			</td>
		</tr>
		`);
	});
}

const reset = function() {
	name.value = '';
	surname.value = '';
	age.value = '';

	male.checked = false;
	female.checked = false;
	fullTime.checked = false;
	partTime.checked = false;

	postJob.value = '';
	position.value = '';
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	checkInputs();
});