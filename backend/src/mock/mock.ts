import fs from 'fs';
import { sequelize } from '../db.controller';
import Users from '../models/User'
import Role from '../models/Role'
import Apartments from '../models/Apartment'
import Owners from '../models/Owner'
import Residents from '../models/Resident'

const mock: Function = () => {
    ;
    sequelize.sync()
    const usersData = fs.readFileSync('./backend/src/mock/data/users.json', 'utf8');
    const rolesData = fs.readFileSync('./backend/src/mock/data/roles.json', 'utf8');
    const apartmentsData = fs.readFileSync('./backend/src/mock/data/apartment.json', 'utf8');
    const ownersData = fs.readFileSync('./backend/src/mock/data/owner.json', 'utf8');
    const residentData = fs.readFileSync('./backend/src/mock/data/resident.json', 'utf8')
    //TODO: Add more data files

    const users = JSON.parse(usersData);
    const roles = JSON.parse(rolesData);
    const apartments = JSON.parse(apartmentsData);
    const owners = JSON.parse(ownersData);
    const residents = JSON.parse(residentData);

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
};
mock();