import { Person } from "./Person";

class User extends Person{

    private email: String;
    private password: String;

    constructor(name: string, lastname: string, id: string, email: String){

        super(name,lastname,id)

        this.email = email;
        this.password = id;
    }

    
}