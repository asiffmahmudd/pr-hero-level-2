{
    //instance of guard

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species:string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("I am making sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        bark() {
            console.log("woof");
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        mew() {
            console.log("Mew");
        }
    }

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.bark();
        }
        else if (isCat(animal)) {
            animal.mew();
        }
        else {
            animal.makeSound();
        }
    }

    const dog = new Dog("German", "Dog");
    const cat = new Cat("Persian", "Cat");

    getAnimal(dog);
    getAnimal(cat);

}