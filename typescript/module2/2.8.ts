{
    //promise

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async(): Promise<Todo> => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1'
        );
        const data = (await response.json()) as Todo;
        return data;
    }

    console.log(getTodo());

    type Something = { something : string };
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: "something" };
            if (data) {
                resolve(data);
            }
            else {
                reject('failed to load data');
            }
        });
    }

    //calling create promise function
    const showData = async() => {
        const data: Something = await createPromise();
        return data;
    }

    showData();


}