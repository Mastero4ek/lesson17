'use strict'

class Worker extends Person {
	constructor(name, surname, age, gender, postJob, position) {
		super(name, surname, age, gender);

		this.postJob = postJob;
		this.position = position;
	}

	static workerArr = JSON.parse(localStorage.getItem('workers')) || [];

	static removeWorker(i) {
		Worker.workerArr.splice(Worker.workerArr.indexOf(i), 1);
	}

	addWorker(worker) {
		Worker.workerArr.push(worker);
	}
}