'use strict'

class Worker extends Person {
	constructor(name, surname, age, gender, postJob, position) {
		super(name, surname, age, gender);

		this.postJob = postJob;
		this.position = position;
	}

	static workerArr = JSON.parse(localStorage.getItem('workers')) || [];

	addWorker(worker) {
		Worker.workerArr.push(worker);
	}

	removeWorker(index) {
		Worker.workerArr.splice(Worker.workerArr.indexOf(index), 1);
	}
}