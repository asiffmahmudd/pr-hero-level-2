{
    //oop - class

    class Animal { 

        constructor(public name: string, public species: string, public sound: string){
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound() { 
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("Golden Retriever", "Dog", "Woof");
    const cat = new Animal("Persian", "Cat", "Mew");

    dog.makeSound();
}