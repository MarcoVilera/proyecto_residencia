import express from 'express';
import Users from '../models/User';
import Residents from '../models/Resident';
import Owners from '../models/Owner';
import { Optional } from 'sequelize';

const router = express.Router();
export default router.get('/', async(_req,res)=> {
    
    try {
        
        const users = await Users.findAll();
        res.send(users);

    } catch (error) {
        
        console.log(error);
    }
})

router.post("/new", async (req,res) => {
    
    try {
        
        const checkUserByEmail = await Users.findOne({ where: { email: req.body.email } });
        const checkUserByCI = await Users.findOne({ where: { ci: req.body.ci } });
        
        if (checkUserByCI) {
        
            return res.status(400).send({ message: "Ya hay un usuario registrado con la cedula introducida" });
        
        }else if (checkUserByEmail) {
            
            return res.status(400).send({ message: "Ya hay un usuario registrado con el correo intoducido" });
        }
        
        const user = await Users.create(req.body);
        
        user.save();
        res.status(201).send(user);

        /*if (req.body.user_role == "resident") {
            
            const resident = await Residents.create(req.body);
            res.send(resident);
        
        }else if (req.body.user_role == "owner") {
            
            const owner = await Owners.create(req.body);
            res.send(owner);
        }*/
        

    } catch (error) {
        
        console.log(error);
        
        res.status(400).send(error);
    }

});

router.patch("/users/modify/:userId", async (req,res) => {
    
    try {

        const userId = req.params.userId
        const userToUpdate = await Users.findByPk(userId);

        const updateData = req.body;

        //DEFINIR SI HAY OTRO TIPO DE DATO A CAMBIAR EN LOS USUARIOS

        if (userToUpdate && updateData.email) {
            userToUpdate.email = updateData.email;
            
            await userToUpdate.save();
            res.status(201).send(userToUpdate);
        }


    } catch (error) {
        
        console.log(error);
        
        res.status(400).send(error);
    }

});

router.delete("/users/delete/:userId", async (req,res) => {
    
    try {

        const userId = req.params.userId
        const userDelete = await Users.findByPk(userId);
        console.log(userId);
        console.log(typeof userId);
        
        
        
        if (userDelete != null) {
            await Users.destroy({ where: { user_id : userId } });

        }else{

            return res.send(404).send({message: 'ID is not asociate a any user'})    
        }

        res.send(200).send(userDelete)


    } catch (error) {
        
        console.log(error);
        
        res.status(400).send(error);
    }

});