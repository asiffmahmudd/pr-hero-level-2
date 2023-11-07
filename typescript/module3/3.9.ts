{
    //abstraction

    interface Vehicle1 {
        // name: string;
        // model: number;
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("started");
        }
        stopEngine(): void {
            console.log("stopped");
        }
        move(): void {
            console.log("moving");
        }
        test(){
            console.log("testing")
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();

    //abstract class
    abstract class Car2 implements Vehicle1 {
        abstract startEngine(): void;
        abstract stopEngine(): void
        abstract move(): void
        test(){
            console.log("testing")
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log("Starting engine");
        }
        stopEngine(): void {
            console.log("Stopping engine");
            
        }
        move(): void {
            console.log("Moving car");
        }
    }

    const car = new ToyotaCar();
    car.startEngine();
}