1. Some of the benefits of using TypeScript over Javascript are:
    # Easier to track bugs and errors
    # Type check during compile time
    # Easier to debug and test

2. Optional chaining helps with checking the value of a variable so that even if it's undefined/null it will not block the program. Example:
    type player = {
        name: string;
        age?: number;
    }
    const player1: player = {
        name: "Ronaldinho"
    }
    const result = player1.age ? "Age given" : "Age not given";
    console.log(result) // Age not given

    Nullish coalescing operator checks for null or undefined and is used for usually assigning a default value for null or undefined variables. Example:
    const fit = null ?? 'it was null'
    const bit = 11 ?? 'it wasn't null'
    console.log(fit); // it was null
    console.log(bit); // it wasn't null

3. We can handle asynchronous operations using async/await or callback functions in Typescript. Some of the advantages of using async/await are:
    # Code is more readable
    # Easier error handling using try catch.
    # Simpler process for handling multiple asynchronous operations

4. We use enum in Typescript using the 'enum' keyword. Example:
    enum Computer {
        Apple,
        HP,
        Lenovo
    }
    const computer = Computer.Apple;

    Some of the advantages are:
    # Easier to maintain and update code
    # The values are restricted to the defined set of members which increases type safety
    # Increases readability and cleanness of the code

5. Typeguard is usually a function that checks for a specific type and returns a boolean value. Some of these functions are instanceof, typeof etc. It is used for      narrowing down to a more specific type for a variable. Example:
    const num: number = 1;

    if (typeof(num) == 'number') {
        console.log("It's a number")
    }
    else{
        console.log("It's not a number")
    }

6. Read-only properties can be only viewed but can't be changed. Below is an example of how to use it:
    class Computer {
        readonly model: number;
        name: string;

        constructor(model: number, name: string) {
            this.model = model;
            this.name = name;
        }
    }

    let computer = new Computer(123, "Macbook");
    computer.model = 34 // error
    computer.name = "Air" //valid

7. A union type is a combination of several types. We can use a vertical bar "|" to unionize multiple types. Example:
    let numOrString: number | string;
    numOrString = "string"; // valid
    numOrString = 100       // valid
    numOrString = true;     // error
