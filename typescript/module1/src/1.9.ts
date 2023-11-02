{
    //type alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }
    const student1: Student = {
        name: 'Adam',
        age: 50,
        gender: 'Male',
        contactNo: '05693846',
        address: 'uganda'
    }

    const student2: Student = {
        name: 'Eve',
        age: 50,
        gender: 'Female',
        address: 'canada'
    }

    type UserName  = string;
    type IsAdmin = boolean;
    const userName: UserName = "Persian";
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1+num2;
}