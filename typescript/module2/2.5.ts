{
    // function with generics

    const createArray = (param: string) : string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T) : T[] => {
        return [param];
    }

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q) : [T, Q] => {
        return [param1, param2];
    }

    const res1 = createArrayWithTuple<string, number>('Bangladesh', 222);
    const res2 = createArrayWithTuple<string, {name: string}>("Canada", {name: 'NA'});
    const resGeneric = createArrayWithGeneric<boolean>(true);

    type User = {id: number, name: string};
    const resGenericObj = createArrayWithGeneric<User>({
        id: 222, 
        name: 'Perseus'
    });

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        }
    }
    
    const student1 = addCourseToStudent({name: 'Adam', email: 'a@a.com', devType: 'Expert'});
    const student2 = addCourseToStudent({name: 'Adam', email: 'a@a.com', hired: false});
}