'use strict'

class Junior extends Worker {
	constructor(name, surname, age, gender, postJob, position, salary) {
		super(name, surname, age, gender, postJob, position);

		this._salary = 30000;
	}

	set salary(num) {
		this._salary = num;
	}

	get salary() {
		return this._salary;
	}
}