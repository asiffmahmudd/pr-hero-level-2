{
    //problem-1
    type StringOrNumber = string | number;
    function lengthOrSquare(input: StringOrNumber): number {
        if (typeof(input) === "string") {
            return input.length;
        }
        else if (typeof(input) === "number"){
            return input * input;
        }
        else {
            return 0;
        }
    }


    //problem-2
    type cityStreet = {
        city: string,
        street: string
    }
    interface Person {
        address?: cityStreet;
        phone?: string;
    }
    const getAddressCity = (p: Person): string | undefined => p?.address?.city;


    //problem-3
    class Cat {
        constructor(private name: string, private breed: string) {
            this.name = name;
            this.breed = breed;
        }
    }

    const isCat = <T>(obj:T) => obj instanceof Cat ? "yes, it's a cat." : "no, it's not a cat."


    //problem-4
    const numbersTotal = (mixedData: Array<number | string>) => {
        let total: number = 0;
        mixedData.forEach(element => {
            if (typeof(element) == "number") {
                total += <number>element
            }
        });
        return total;
    }

    

    //problem-5
    interface Car {
        make: string;
        model: string;
        year: number;
    }

    interface Driver {
        name: string;
        licenseNumber: string;
    }

    const combineObjects = (car: Car, driver: Driver) => {
        const result = {...car, ...driver};
        return result; 
    }


    //problem-6
    const isNumber = (element: any): boolean => typeof(element) === "number";
    const isNumberArray = (arr: Array<any>): boolean => arr.every(isNumber)

    const sumOfArray = (arr: unknown) => {
        if(Array.isArray(arr)) {
            if (isNumberArray(arr)) {
                const total = arr.reduce((accumulator, value) => accumulator + value, 0);
                console.log(total)
            }
            else {
                console.log("Error: elements contain non-numeric value")
            }
        }
        else{
            console.log("Error: Not array")
        }
    }



    //problem-7
    const findFirstOccurrence = <T extends unknown>(arr: Array<T>, value: T): number => {
        let result: number = -1
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                result = i;
                break;
            }
        }
        return result;
    }



    //problem-8
    interface Product {
        name: string;
        price: number;
        quantity: number;
    }

    const totalCost = (products: Product[]) => products.reduce((accumulator, value) => accumulator + value.price, 0);

    const p1: Product = {
        name: "apple",
        price: 1,
        quantity: 2
    }
    const p2: Product = {
        name: "apple",
        price: 5,
        quantity: 2
    }
    const p3: Product = {
        name: "apple",
        price: 2,
        quantity: 2
    }
    const p4: Product = {
        name: "apple",
        price: 3,
        quantity: 2
    }
    console.log(totalCost([p1,p2,p3,p4]))
}