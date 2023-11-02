{
    //ternary operator
    const age: number = 15
    if(age >= 18) {
        console.log("Adult")
    }
    else { 
        console.log("Not an adult")
    }
    const isAdult = age >= 18 ? "Adult" : "Not an adult"

    console.log({isAdult});

    //nullish coalescing operator
    //null / undefined --> decision making
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({result1}, {result2});

    type User = {
        name: string,
        address: {
            city: string,
            road: string,
            permanentAddress?: string,
            currentAddress: string
        }
    }

    const user: User = {
        name: "Persian",
        address: {
            city: 'ctg',
            road: 'Awesome rd',
            currentAddress: 'halishahr'
        }
    }

    const permanentAddress = user.address.permanentAddress ?? "No permanent address";
    console.log({permanentAddress});
}