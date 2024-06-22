class ComunAreas {

    private idArea: number;
    private nameArea: string;
    private availableTime: Date; //REVISAR TIPO DE DATO
    private costArea: number;

    constructor(idArea: number, nameArea: string, availableTime: Date, costArea: number) {
        this.idArea = idArea;
        this.nameArea = nameArea;
        this.availableTime = availableTime;
        this.costArea = costArea;
      }
    
      // Getters
      public getIdArea(): number {
        return this.idArea;
      }
    
      public getNameArea(): string {
        return this.nameArea;
      }
    
      public getAvailableTime(): Date {
        return this.availableTime;
      }
    
      public getCostArea(): number {
        return this.costArea;
      }
    
      // Setters
      public setIdArea(idArea: number): void {
        this.idArea = idArea;
      }
    
      public setNameArea(nameArea: string): void {
        this.nameArea = nameArea;
      }
    
      public setAvailableTime(availableTime: Date): void {
        this.availableTime = availableTime;
      }
    
      public setCostArea(costArea: number): void {
        this.costArea = costArea;
      }
    
}