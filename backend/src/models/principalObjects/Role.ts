import { AccountRole, } from "./RoleTypes/AccountRole";
import { AreaRole } from "./RoleTypes/AreaRole";
import { UserRole } from "./RoleTypes/UserRole";
import { QuotasRole } from "./RoleTypes/quotasRole";

class Role{

    private nameRol: string;
    private idRol: number;
    private allRoles: boolean;

    private accountRole: AccountRole;
    private areaRole: AreaRole;
    private userRoles: UserRole;
    private quotasRole: QuotasRole;

    
    //Constructor a utilizar si se va a crear el superUser
    constructor(nameRol: string, idRol: number, allRoles: boolean) {
        this.nameRol = nameRol;
        this.idRol = idRol;
        this.allRoles = allRoles;
        
        // Initialize nested roles based on allRoles
        this.accountRole = new AccountRole(true, true,true);
        this.areaRole = new AreaRole(true,true);
        this.userRoles = new UserRole(true,true,true);
        this.quotasRole = new QuotasRole(true,true,true);
    }  
    

    // Getters for basic properties
    public getNameRol(): string {
        return this.nameRol;
    }

    public getIdRol(): number {
        return this.idRol;
    }

    public getAllRoles(): boolean {
        return this.allRoles;
    }

    // Getters for nested roles (assuming they have getters)
    public getAccountRole(): AccountRole {
        return this.accountRole;
    }

    public getAreaRole(): AreaRole {
        return this.areaRole;
    }

    public getUserRoles(): UserRole {
        return this.userRoles;
    }

    public getQuotasRole(): QuotasRole {
        return this.quotasRole;
    }

    // Setters for basic properties (consider validation if needed)
    public setNameRol(newNameRol: string): void {
        this.nameRol = newNameRol;
    }

    public setIdRol(newIdRol: number): void {
        this.idRol = newIdRol;
    }
    
}