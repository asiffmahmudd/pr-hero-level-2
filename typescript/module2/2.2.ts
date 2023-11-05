{
    // interface

    type User1 = {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string }; 
    const user2: UserWithRole1 = {
        name: "Persian",
        age: 100,
        role: 'manager'
    }

    type rollNumber = number;

    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string
    }

    const user1: UserWithRole2 = {
        name: "Persian",
        age: 100,
        role: "employee"
    }

    // js --> object, array -> object, function -> object
    type Roll1 = number[];

    interface Roll2 {
        [index : number] : number
    }

    const rollNumber: Roll2 = [1,2,3];

    type Add1 = (num1:number, num2: number)=> number;
    interface Add2 {
        (num1: number, num2: number) : number;
    }

    const add: Add2 = (num1, num2) => num1 + num2;

    
}