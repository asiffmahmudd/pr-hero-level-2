{
    //generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship";

    type Owner2 = keyof Vehicle;

    const  getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => obj[key];
    

    const user = {
        name: 'Persian',
        age: 26,
        address: 'ctg'
    }

    const result1 = getPropertyValue(user, 'name');

}