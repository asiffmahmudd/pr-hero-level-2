{
    //constraints
    interface StudentConstraints {
        id: number;
        name: string;
        email: string;
    }
    const addCourseToStudent = <T extends StudentConstraints>(student: T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        }
    }

    const student3 = addCourseToStudent({
        id: 423,
        name: "Lea",
        email: "l@l.com"
    });
    
    const student1 = addCourseToStudent({
        id:123,
        name: 'Adam', 
        email: 'a@a.com', 
        devType: 'Expert'
    });
    const student2 = addCourseToStudent({
        id:312,
        name: 'Adam', 
        email: 'a@a.com', 
        hired: false
    });

}