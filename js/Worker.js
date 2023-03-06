'use strict'

class Worker extends Person {
	constructor(name, surname, age, gender, postJob, position, remove) {
		super(name, surname, age, gender);

		this.postJob = postJob;
		this.position = position;
		this.remove = false;
	}

	addWorker(worker) {
		workerArr.push(worker);
	}

	removeWorker() {
		let removeBtn = document.querySelectorAll('.table__button');

		removeBtn.forEach((btn, i) => {
			btn.addEventListener('click', () => {
				console.log(btn)
				console.log(i)
				// workerArr.splice(workerArr.indexOf(index), 1);
			});
		});
	}
}