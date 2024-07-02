import express from 'express';
import Users from '../models/User';
import Residents from '../models/Resident';
import Owners from '../models/Owner';

const router = express.Router();
export default router.get('/users', async(_req,res)=> {
    
    try {
        
        const users = await Users.findAll();
        res.send(users);

    } catch (error) {
        
        console.log(error);
    }
})

router.post("/users/new", async (req,res) => {
    
    try {
        
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