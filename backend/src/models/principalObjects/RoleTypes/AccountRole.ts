export class AccountRole {
    private seeAccount: boolean;
    private insertAccount: boolean;
    private extractAccount: boolean;
  
    constructor(seeAccount: boolean, insertAccount: boolean, extractAccount: boolean) {
      this.seeAccount = seeAccount;
      this.insertAccount = insertAccount;
      this.extractAccount = extractAccount;
    }
  
    // Getter for seeAccount permission
    public get canSeeAccount(): boolean {
      return this.seeAccount;
    }
  
    // Setter for seeAccount permission
    public set canSeeAccount(value: boolean) {
      this.seeAccount = value;
    }
  
    // Getter for insertAccount permission
    public get canInsertAccount(): boolean {
      return this.insertAccount;
    }
  
    // Setter for insertAccount permission
    public set canInsertAccount(value: boolean) {
      this.insertAccount = value;
    }
  
    // Getter for extractAccount permission
    public get canExtractAccount(): boolean {
      return this.extractAccount;
    }
  
    // Setter for extractAccount permission
    public set canExtractAccount(value: boolean) {
      this.extractAccount = value;
    }
  }