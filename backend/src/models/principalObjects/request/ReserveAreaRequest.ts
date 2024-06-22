class ReserveAreaRequest{

    private id: number;
    private idUserReserve: number;
    private idAreaReserve: number;
    private dateReserve: Date;
    private payArea: number;
    private durationReserve: string;

    constructor(
        id: number,
        idUserReserve: number,
        idAreaReserve: number,
        dateReserve: Date,
        payArea: number,
        durationReserve: string
      ) {
        this.id = id;
        this.idUserReserve = idUserReserve;
        this.idAreaReserve = idAreaReserve;
        this.dateReserve = dateReserve;
        this.payArea = payArea;
        this.durationReserve = durationReserve;
      }
    
      // Getter for id
      public get getId(): number {
        return this.id;
      }
    
      // Setter for id (be cautious about modifying IDs)
      public set setId(newId: number) {
        if (newId <= 0) {
          throw new Error("id must be a positive number");
        }
        this.id = newId;
      }
    
      // Getters for other properties
      public get getIdUserReserve(): number {
        return this.idUserReserve;
      }
    
      public get getIdAreaReserve(): number {
        return this.idAreaReserve;
      }
    
      public getDateReserve(): Date {
        return new Date(this.dateReserve.getTime()); // Return a copy of the date
      }
    
      public get getPayArea(): number {
        return this.payArea;
      }
    
      public get getDurationReserve(): string {
        return this.durationReserve;
      }
    
      // Setters for other properties
      public set setIdUserReserve(newIdUserReserve: number) {
        this.idUserReserve = newIdUserReserve;
      }
    
      public setIdAreaReserve(newIdAreaReserve: number) {
        this.idAreaReserve = newIdAreaReserve;
      }
    
      public setDateReserve(newDateReserve: Date) {
        this.dateReserve = new Date(newDateReserve.getTime()); // Set a copy of the date
      }
    
      public setSetPayArea(newPayArea: number) {
        if (newPayArea < 0) {
          throw new Error("payArea cannot be negative");
        }
        this.payArea = newPayArea;
      }
    
      public setSetDurationReserve(newDurationReserve: string) {
        this.durationReserve = newDurationReserve;
      }
}