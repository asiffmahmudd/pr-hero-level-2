{
    //union types

    type DeveloperType = 'FakibajDeveloper' | 'juniorDeveloper'
    // type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper"

    type Developer = DeveloperType | FullStackDeveloper;

    const newDeveloper: DeveloperType = "juniorDeveloper";

    type User = {
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodGroup: "O+" | "A+" | "AB+";
    }

    const user1 = {
        name: "Persian",
        gender: "male",
        bloodGroup: "O+"
    }

    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullStackDeveloper  = FrontendDeveloper & BackendDeveloper
    const fullStackDeveloper : FullStackDeveloper = {
        skills: ['HTML', 'ÇSS', 'Node'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    };

    
}