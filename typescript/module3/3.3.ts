{
    // type guards

    //typeof -> type guard

    type AlphaNuemeric = string | number;
    const add = (param1: AlphaNuemeric, param2: AlphaNuemeric): AlphaNuemeric => {
        if (typeof param1 === 'number' && typeof param2 === "number"){
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    }
    
    const result1 = add("2", "3");
    console.log(result1);

    // in guard

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: "Normal User",
    }
    const adminlUser: AdminUser = {
        name: "Normal User",
        role: "admin"
    }

    getUser(adminlUser);
    getUser(normalUser);
}