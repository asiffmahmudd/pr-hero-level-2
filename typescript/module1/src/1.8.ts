{
    //destructuring
    const user = {
        id: 123,
        name: {
            firstName: 'Fernando',
            middleName: 'James',
            lastName: 'Torres',
        },
        contactNo: '042357456',
        address: 'Road street'
    };

    const {
        contactNo, 
        name: { middleName }
    } = user;

    //array destructuring
    const myFriends = ["Chandler", "Monica", "Ross", "Joey"]

    const [,, bestFriend, ...rest] = myFriends;

}