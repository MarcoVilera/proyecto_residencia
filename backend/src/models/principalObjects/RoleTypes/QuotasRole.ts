export class QuotasRole {
    private createQuotas: boolean;
    private editQuotas: boolean;
    private deleteQuotas: boolean;
  
    constructor(createQuotas: boolean, editQuotas: boolean, deleteQuotas: boolean) {
      this.createQuotas = createQuotas;
      this.editQuotas = editQuotas;
      this.deleteQuotas = deleteQuotas;
    }
  
    // Getter for createQuotas
    public get getCreateQuotas(): boolean {
      return this.createQuotas;
    }
  
    // Setter for createQuotas
    public set setCreateQuotas(canCreate: boolean) {
      this.createQuotas = canCreate;
    }
  
    // Getter for editQuotas
    public get getEditQuotas(): boolean {
      return this.editQuotas;
    }
  
    // Setter for editQuotas
    public set setEditQuotas(canEdit: boolean) {
      this.editQuotas = canEdit;
    }
  
    // Getter for deleteQuotas
    public get getDeleteQuotas(): boolean {
      return this.deleteQuotas;
    }
  
    // Setter for deleteQuotas
    public set setDeleteQuotas(canDelete: boolean) {
      this.deleteQuotas = canDelete;
    }
  }