import fs from 'fs';
import { sequelize } from '../db.controller';
import Users from '../models/User'
import Role from '../models/Role'
import Apartments from '../models/Apartment'
import Owners from '../models/Owner'
import Residents from '../models/Resident'
import Quotas from '../models/Quota';
import CommonAreas from '../models/CommonArea';
import Payments from '../models/Payment';
import CommonArea_Reserve from '../models/CommonArea_Reserve';
const mock: Function = () => {
    ;
    sequelize.sync()
    const usersData = fs.readFileSync('./backend/src/mock/data/users.json', 'utf8');
    const rolesData = fs.readFileSync('./backend/src/mock/data/roles.json', 'utf8');
    const apartmentsData = fs.readFileSync('./backend/src/mock/data/apartment.json', 'utf8');
    const ownersData = fs.readFileSync('./backend/src/mock/data/owner.json', 'utf8');
    const residentData = fs.readFileSync('./backend/src/mock/data/resident.json', 'utf8')
    const quotasData = fs.readFileSync('./backend/src/mock/data/quota.json', 'utf8')
    const commonAreasData = fs.readFileSync('./backend/src/mock/data/commonArea.json', 'utf8')
    const paymentsData = fs.readFileSync('./backend/src/mock/data/payment.json', 'utf8')
    const commonAreaReservationsData = fs.readFileSync('./backend/src/mock/data/commonArea_reserve.json', 'utf8')
    //TODO: Add more data files

    const users = JSON.parse(usersData);
    const roles = JSON.parse(rolesData);
    const apartments = JSON.parse(apartmentsData);
    const owners = JSON.parse(ownersData);
    const residents = JSON.parse(residentData);
    const quotas = JSON.parse(quotasData);
    const commonAreas = JSON.parse(commonAreasData);
    const payments = JSON.parse(paymentsData);
    const commonAreaReservations = JSON.parse(commonAreaReservationsData);
    //Leyendo los datos de los roles
    roles.forEach((role: any) => {
        Role.create(role);
    });
    users.forEach((user: any) => {
        Users.create(user);
    });
    owners.forEach((owner: any) => {
        Owners.create(owner);
    });
    residents.forEach((resident: any) => {
        Residents.create(resident);
    });
    apartments.forEach((apartment: any) => {
        Apartments.create(apartment);
    });
    quotas.forEach((quota: any) => {
        Quotas.create(quota);
    });
    //TODO: Fix date format assignation
    commonAreas.forEach((commonArea: any) => {
        const openTimeParts = commonArea.OpenTime.split(':');
        const closeTimeParts = commonArea.CloseTime.split(':');
        // console.log(Date())
        const date = new Date();
        date.setHours(8, 0, 0);
        // console.log(date)
        // console.log(` ${commonArea.area_name} Hora tomada por split: `, openTimeParts, closeTimeParts)
        const openTime = new Date();
        openTime.setHours(openTimeParts[0], 0, 0);
        const closeTime = new Date();
        closeTime.setHours(parseInt(closeTimeParts[0]), parseInt(closeTimeParts[1]), 0);

        // Ahora `openTime` y `closeTime` son objetos Date que puedes insertar en la base de datos.
        commonArea.OpenTime = openTime;
        commonArea.CloseTime = closeTime;
        // console.log(` ${commonArea.area_name} Hora convertida a Date: `, openTime, closeTime)
        CommonAreas.create(commonArea);
    });
    payments.forEach((payment: any) => {
        const payment_date = new Date(payment.payment_date);
        payment.payment_date = payment_date;
        Payments.create(payment);
    });
    commonAreaReservations.forEach((commonAreaReservation: any) => {
        const reservation_date = new Date(commonAreaReservation.date_reserve);
        commonAreaReservation.date_reserve = reservation_date;
        CommonArea_Reserve.create(commonAreaReservation);
    });
};
mock();