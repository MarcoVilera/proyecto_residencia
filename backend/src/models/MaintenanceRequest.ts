// class MaintenanceRequest{

//     private id: number;
//     private idUserRequest: number;
//     private description: string;
//     private dateRequest: Date;
//     private state: string;
    
//     constructor(
//         id: number,
//         idUserRequest: number,
//         description: string,
//         dateRequest: Date,
//         state: string
//       ) {
//         this.id = id;
//         this.idUserRequest = idUserRequest;
//         this.description = description;
//         this.dateRequest = dateRequest;
//         this.state = state;
//       }
    
//       // Getter for id
//       public get getId(): number {
//         return this.id;
//       }
    
//       // Setter for id (not recommended for modification)
//       public set setId(newId: number) {
//         console.warn("Modifying id after creation is not recommended.");
//         this.id = newId;
//       }
    
//       // Getter for idUserRequest
//       public get getIdUserRequest(): number {
//         return this.idUserRequest;
//       }
    
//       // Setter for idUserRequest
//       public set setIdUserRequest(newId: number) {
//         this.idUserRequest = newId;
//       }
    
//       // Getter for description
//       public get getDescription(): string {
//         return this.description;
//       }
    
//       // Setter for description
//       public set setDescription(newDescription: string) {
//         this.description = newDescription;
//       }
    
//       // Getter for dateRequest
//       public get getDateRequest(): Date {
//         return new Date(this.dateRequest.getTime()); // Return a copy to avoid unintended modifications
//       }
    
//       // Setter for dateRequest (consider immutability for dates)
//       public set setDateRequest(newDate: Date) {
//         this.dateRequest = new Date(newDate.getTime()); // Create a copy to avoid unintended modifications
//       }
    
//       // Getter for state
//       public get getState(): string {
//         return this.state;
//       }
    
//       // Setter for state
//       public set setState(newState: string) {
//         this.state = newState;
//       }


// }
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import Users from './User';

@Table({
    tableName: 'maintenance_requests',
    timestamps: false
})
export default class MaintenanceRequests extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id_request: number;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    user_requesting: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    date_request: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    state: string;

    @BelongsTo(() => Users, { foreignKey: 'user_requesting', targetKey: 'name' })
    user_request: Users;
}