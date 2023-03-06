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

const stackTrainee = ['HTML', 'CSS'],
	stackJunior = ['HTML', 'SCSS', 'JS'],
	stackMiddle = ['HTML', 'SCSS', 'JS', 'React'],
	stackSenior = ['HTML', 'SCSS', 'JS', 'React', 'WebPack'];

const trainee = new Trainee();
const junior = new Junior();
const middle = new Middle();
const senior = new Senior();

let workerArr = [];

const appData = {
	gender: '',
	employment: '',
	postjob: '',
	position: '',
	salary: 0,

	init: function() {
		this.getPosition();
		this.getPostjob();
		this.getGender();
		this.getEmployment();

		form.addEventListener('submit', (event) => {
			event.preventDefault();

			this.checkInputs();
		});
	},
	isString: function(str) {
		return typeof str == 'string' &&
			   isNaN(str) &&
			   !(str.startsWith(' ') || str.endsWith(' '));
	},
	isNumber: function(num) {
		return !isNaN(parseFloat(num)) &&
			   isFinite(num) &&
			   !(num.startsWith(' ') || num.endsWith(' '));
	},
	checkInputs: function() {
		if(!this.isString(name.value) || !this.isString(surname.value) || !this.isNumber(age.value) ||
			(!male.checked && !female.checked) || (!fullTime.checked && !partTime.checked)) {

			formError.forEach((i) => {
				i.style.display = 'block';
			});

			console.log('введите данные');
		} else {
			formError.forEach((i) => {
				i.style.display = 'none';
			});

			console.log(workerArr)

			this.renderWorker();
			this.reset();
		}
	},
	getGender: function() {
		for (let i = 0; i < gender.length; i++) {
			gender[i].addEventListener('change', () => {
				if (gender[i].type == "radio" && gender[i].checked) {
		            this.gender = gender[i].value;
		        }
			});
	    }
	},
	getPostjob: function() {
		postJob.addEventListener('change', () => {
			let postJobIndex = postJob.selectedIndex,
				postJobOption = postJob.options;

			switch(true) {
				case postJob.value == 'tra':
				this.postjob = `${postJobOption[postJobIndex].textContent}`;

				this.addWorker(trainee);
				console.log(trainee)
				trainee.stack = stackTrainee.join(',');

				break;

				case postJob.value == 'jun':
				this.postjob = `${postJobOption[postJobIndex].textContent}`;

				this.addWorker(junior);
				console.log(junior)
				// junior.stack = stackJunior.join(',');

				break;

				case postJob.value == 'mid':
				this.postjob = `${postJobOption[postJobIndex].textContent}`;

				this.addWorker(middle);
				console.log(middle)
				// middle.stack = stackMiddle.join(',');

				break;

				case postJob.value == 'sen':
				this.postjob = `${postJobOption[postJobIndex].textContent}`;

				this.addWorker(senior);
				console.log(senior)
				// senior.stack = stackSenior.join(',');

				break;
			}
		});
	},
	getPosition: function() {
		position.addEventListener('change', () => {
			let positionIndex = position.selectedIndex,
				positionOption = position.options;

			switch(true) {
				case position.value == 'fe':
				this.position = `${positionOption[positionIndex].textContent}`;
				break;

				case position.value == 'be':
				this.position = `${positionOption[positionIndex].textContent}`;
				break;

				case position.value == 'fs':
				this.position = `${positionOption[positionIndex].textContent}`;
				break;
			}
		});
	},
	getEmployment: function() {
		for (let i = 0; i < employment.length; i++) {
			employment[i].addEventListener('change', () => {
				if (employment[i].type == "radio" && employment[i].checked) {
		            this.employment = employment[i].value;
		        }
			});
	    }
	},
	addWorker: function(worker) {
		worker.name = name.value;
		worker.surname = surname.value;
		worker.age = age.value;
		worker.gender = this.gender;
		worker.postJob = this.postjob;
		worker.position = this.position;
	},
	renderWorker: function() {
		table.innerHTML = '';

		workerArr.forEach((item) => {
			table.insertAdjacentHTML('beforeend', `
			<tr class="table__items">
				<td class="table__item">${item.name}</td>

				<td class="table__item">${item.surname}</td>

				<td class="table__item">${item.age}</td>

				<td class="table__item">${item.gender}</td>

				<td class="table__item">${item.postJob}</td>

				<td class="table__item">${item.stack.join(',')}</td>

				<td class="table__item">${item.salary}</td>

				<td class="table__item">
					<button type="button" class="table__button">Удалить</button>
				</td>
			</tr>
			`);
		});
	},
	reset: function() {
		this.gender = '';
		this.employment = '';
		this.postjob = '';
		this.position = '';
		this.salary = 0;

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
}

appData.init();