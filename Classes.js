'use strict'

class Person {
	constructor(name, surname, age, gender) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.gender = gender;
	}
}

class Worker extends Person {
	constructor(name, surname, age, gender, postJob, position) {
		super(name, surname, age, gender);

		this.postJob = postJob;
		this.position = position;
	}

	addWorker(worker) {
		workerArr.push(worker);
	}

	removeWorker() {
		console.log('yes')
		let tableBtn = document.querySelectorAll('.table__button');

		tableBtn.forEach((item) => {
			item.addEventListener('click', () => {
				console.log(item)
			});
		});
	}
}

class Trainee extends Worker {
	constructor(name, surname, age, gender, postJob, position, stack = [], salary = 0) {
		super(name, surname, age, gender, postJob, position);
		
		this._stack = stack;
		this.salary = 15000;
	}

	get stack() {
		return this._stack;
	}

	set stack(str) {
		this.stack.push(str);
	}
}

class Junior extends Worker {
	constructor(name, surname, age, gender, postJob, position, stack = [], salary = 0) {
		super(name, surname, age, gender, postJob, position);
		
		this._stack = stack;
		this.salary = 30000;
	}

	get stack() {
		return this._stack;
	}

	set stack(str) {
		this.stack.push(str);
	}
}

class Middle extends Worker {
	constructor(name, surname, age, gender, postJob, position, stack = [], salary = 0) {
		super(name, surname, age, gender, postJob, position);
		
		this._stack = stack;
		this.salary = 80000;
	}

	get stack() {
		return this._stack;
	}

	set stack(str) {
		this.stack.push(str);
	}
}

class Senior extends Worker {
	constructor(name, surname, age, gender, postJob, position, stack = [], salary = 0) {
		super(name, surname, age, gender, postJob, position);
		
		this._stack = stack;
		this.salary = 150000;
	}

	get stack() {
		return this._stack;
	}

	set stack(str) {
		this.stack.push(str);
	}
}