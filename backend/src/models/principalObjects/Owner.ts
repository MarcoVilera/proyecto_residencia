import { Role } from "./Role";
import { User } from "./User";

class Owner extends User{

    private ownerId: number;
    private apartment: Apartment;

    //Nombre de usuario por definir
    private user : string;

    constructor(name: string, lastname : string, id: string, email: string, role: Role, ownerId: number, apartment: Apartment){

        super(name, lastname, id, email, role);

        this.ownerId = ownerId;
        this.apartment = apartment;

    }
}