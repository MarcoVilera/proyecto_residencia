import express from 'express';
import Apartments from '../models/Apartment';

const router = express.Router();
export default router.get('/', async(_req,res)=> {
    
    try {
        
        const apartments = await Apartments.findAll();
        res.send(apartments);

    } catch (error) {
        
        console.log(error);
    }
})

router.post("/new", async (req,res) => {
    
    try {
        
        const apartments = await Apartments.create(req.body);
        
        apartments.save();
        res.status(201).send(apartments);

    } catch (error) {
        
        console.log(error);
        
        res.status(400).send(error);
    }

});
