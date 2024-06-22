class Apartment{

    private apartmentId: number;
    private state: string;

    constructor(apartmentId: number, state: string) {
        this.apartmentId = apartmentId;
        this.state = state;
      }
    
      // Getter for apartmentId
      public get getApartmentId(): number {
        return this.apartmentId;
      }
    
      // Setter for apartmentId
      public set setApartmentId(newId: number) {
    
        this.apartmentId = newId;
      }
    
      // Getter for state
      public get getState(): string {
        return this.state;
      }
    
      // Setter for state
      public set setState(newState: string) {
        this.state = newState;
      }


}