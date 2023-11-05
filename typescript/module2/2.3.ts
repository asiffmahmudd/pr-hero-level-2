{
    // generic type

    type GenericArray<T> = Array<T>;

    // const rollNumbers : number[] = [3,5,8];
    const rollNumbers : GenericArray<number> = [3,5,8];

    // const mentors: string[] = ['X', 'Ý', 'Z'];
    const mentors: GenericArray<string> = ['X', 'Ý', 'Z'];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    interface User {
        name: string,
        age: number
    }

    const user: GenericArray<User>= [
        {
            name: 'Alan',
            age: 100
        },
        {
            name: 'Ryan',
            age: 110
        },
    ];

    const add = (x: number, y:number)=> x+y;

    add(30,20);

    //generic tuple

    type GenericTuple<X, Y> = [X, Y];

    const manush: GenericTuple<string, string> = ['X', 'Y'];

    const UserWithId: GenericTuple<number, { name: string, email:string }> = [1234, {name: 'persian', email: 'a@a.com'}]
}