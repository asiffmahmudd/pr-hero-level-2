{
    //utility type
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    //pick
    type NameAge = Pick<Person, "name" | "age">
    //omit
    type ContactInfo = Omit<Person, "name" | "age">
    //required
    type PersonRequired = Required<Person>
    //Partial
    type PersonPartial = Partial<Person>

    //readonly
    type PersonReadOnly = Readonly<Person> 
    const person1: PersonReadOnly = {
        name: "Sarada",
        age: 123,
        contactNo: "456345"
    } 

    // person1.name = "Boruto"

    //Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>

    const EmptyObj : Record<string, unknown> = {} 

    const obj1 : MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd",
    }



}