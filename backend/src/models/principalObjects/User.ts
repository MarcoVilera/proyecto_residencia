import { Person } from "./Person";
import { Role } from "./Role";

export class User extends Person{

    private email: string;
    private password: string;
    private role: Role; 

    constructor(name: string, lastname: string, id: string, email: string, role: Role){

        super(name,lastname,id)

        this.email = email;
        this.password = id;
        this.role = role;
    }

    // Getters
    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        // Consider returning a hashed version of the password for security reasons (don't store plain text passwords)
        return this.password;
    }

    public getRole(): Role {
        return this.role;
    }

    // Setters with basic validation (consider adding more robust validation as needed)
    public setEmail(newEmail: string): void {
        if (newEmail.length > 0 && newEmail.includes('@')) {
        this.email = newEmail;
        } else {
        throw new Error("Invalid email format");
        }
    }

    public setPassword(newPassword: string): void {
        // Consider using a secure hashing algorithm to store passwords securely
        this.password = newPassword;
    }

    public setRole(newRole: Role): void {
        this.role = newRole;
    }
    
}