class Car {
	constructor( make, model, year) {
		this.make = make,
		this.model = model,
		this.year = year
	}

	logCarDetails() {
		console.log(`The vehicle is a ${this.year} ${this.make} ${this.model}`);
	}
}

class Owner extends Car { //inheritance here 'extends'
	constructor(make, model, year, name) { //borrow from other class as parameter
		super(model, make, model) //borrowed key-value
		this.name = name //new key-value
	}

	logOwnerInfo(){
	console.log(`${this.name} owns a ${this.model}`)
	}
}

const carInstance = new Car("Toyota", "Corolla", 1992);
carInstance.logCarDetails();

const ownerInstance = new Owner("Toyota", "Corolla", 1992, "Travis");
ownerInstance.logOwnerInfo();