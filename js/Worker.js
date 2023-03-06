'use strict'

class Worker extends Person {
	constructor(name, surname, age, gender, postJob, position) {
		super(name, surname, age, gender);

		this.postJob = postJob;
		this.position = position;
	}

	addWorker(worker) {
		workerArr.push(worker);
	}

	removeWorker(index) {
		workerArr.splice(workerArr.indexOf(index), 1);
	}
}