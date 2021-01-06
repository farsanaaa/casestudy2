const express = require('express');
const signinRouter = express.Router();

function router(nav){
    signinRouter.get('/',function(req,res){
        res.render("Signin",{
            nav,
            title:'Signin',
            
    
        });
    });
    
    return signinRouter;
    }
    
    
    module.exports = router;