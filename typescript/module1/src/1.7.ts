{
    //spread operator
    const bros1 : string[] = ['Mir', 'kheer', 'bir'];
    const bros2 : string[] = ['ril', 'fil', 'kil'];

    bros1.push(...bros2);

    const mentors1 = {
        typescript: 'Adam',
        redux: 'eve',
        dbms: 'snake'
    }

    const mentors2 = {
        prisma: 'dumbledore',
        next: 'harry',
        cloud: 'ron'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    //rest operator
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greetFriends('Ross', "Chandler", 'Monica', "Rachel", "Joey", "Phoebe");
}