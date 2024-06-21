export class AreaRole {
    private reserveArea: boolean;
    private registerArea: boolean;
  
    constructor(reserveArea: boolean, registerArea: boolean) {
      this.reserveArea = reserveArea;
      this.registerArea = registerArea;
    }
  
    // Getter for reserveArea
    public get getReserveArea(): boolean {
      return this.reserveArea;
    }
  
    // Setter for reserveArea
    public set setReserveArea(canReserve: boolean) {
      this.reserveArea = canReserve;
    }
  
    // Getter for registerArea
    public get getRegisterArea(): boolean {
      return this.registerArea;
    }
  
    // Setter for registerArea
    public set setRegisterArea(canRegister: boolean) {
      this.registerArea = canRegister;
    }
  }