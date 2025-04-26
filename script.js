//complete this code
class Animal {
	constructor(species){
		this._species = species
	}
	get species(){
		return this._species
	}
	makeSound() {
		return console.log(`The ${this._species} makes a sound`)
	}
}

class Dog extends Animal {
	constructor(species){
		super(species)
		
	}
	bark(){
		return console.log('woof')
	}
	makeSound(){
		return super.makeSound()
	}
}

class Cat extends Animal {
	constructor(species){
		super(species)
	}
	purr(){
		return console.log('purr')
	}
	makeSound(){
		return super.makeSound()
	}
}

const myCat = new Cat("Siamese");
myCat.makeSound();
myCat.purr()

const myDog = new Dog("Golden Retriever");
myDog.makeSound()
myDog.bark()

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
