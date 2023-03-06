'use strict'

class Trainee extends Worker {
	constructor(name, surname, age, gender, postJob, position, salary = 0) {
		super(name, surname, age, gender, postJob, position);

		this.salary = 15000;
	}
}