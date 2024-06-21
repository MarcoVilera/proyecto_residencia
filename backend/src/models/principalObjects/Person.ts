export class Person{

    private name: string ;
    private lastname: string;
    private id: string;

    constructor(name: string, lastname: string, id: string){

        this.name = name;
        this.lastname = lastname;
        this.id = id;
    }

    // Getter for name
    public get getName(): string {
        return this.name;
    }

    // Setter for name
    public set setName(newName: string) {
        this.name = newName;
    }

    // Getter for lastname
    public get getLastName(): string {
        return this.lastname;
    }

    // Setter for lastname
    public set setLastName(newLastname: string) {
        this.lastname = newLastname;
    }

    // Getter for id
    public get getId(): string {
        return this.id;
    }

    // Setter for id (consider potential use case for modifying id)
    public set setId(newId: string) {
        // You might want to add validation or restrictions here
        // for modifying the id after the object is created.
        this.id = newId;
    }
        

}