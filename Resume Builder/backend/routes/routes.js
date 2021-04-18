var express = require('express');
var router = express.Router();
const data = require('../model/model');



router.get('/details', (req, res, next)=>{
    res.send("testing routes");
});

router.post('/add_user', async (req, res, next)=>{
    try{
        const mydata = new data(req.body);
        await mydata.save();
        res.send("Registered Successfully!");
    }catch (err){
        res.send({message: err});
    }
});

router.put('/update_details', (req, res, next)=>{
    
});

router.delete('/delete_account', (req, res, next)=>{

});





module.exports = router;