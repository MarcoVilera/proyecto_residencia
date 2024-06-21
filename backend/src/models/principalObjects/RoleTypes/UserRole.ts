export class UserRole {
    private createUser: boolean;
    private editUser: boolean;
    private deleteUser: boolean;
  
    constructor(createUser: boolean = false, editUser: boolean = false, deleteUser: boolean = false) {
      this.createUser = createUser;
      this.editUser = editUser;
      this.deleteUser = deleteUser;
    }
  
    // Getter for createUser
    public get canCreateUser(): boolean {
      return this.createUser;
    }
  
    // Setter for createUser
    public set setCanCreateUser(canCreate: boolean) {
      this.createUser = canCreate;
    }
  
    // Getter for editUser
    public get canEditUser(): boolean {
      return this.editUser;
    }
  
    // Setter for editUser
    public set setCanEditUser(canEdit: boolean) {
      this.editUser = canEdit;
    }
  
    // Getter for deleteUser
    public get canDeleteUser(): boolean {
      return this.deleteUser;
    }
  
    // Setter for deleteUser
    public set setCanDeleteUser(canDelete: boolean) {
      this.deleteUser = canDelete;
    }
  }