// reference type --> object
{
    const user: {
        readonly company: 'programming hero'; // type --> literal types
        firstName: string;
        middleName?: string;
        lastName: string;
        isMarried: boolean; 
    } = {
        company: 'programming hero',
        firstName: "alvin",
        lastName: "Bro",
        isMarried: true
    }
}