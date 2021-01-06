const express = require('express');
const signupRouter = express.Router();



function router(nav){
        signupRouter.get('/',function(req,res){
        
        res.render("Signup",{
            nav,
            title:'SignUp',
            
            
    
        });
    });
    
    return signupRouter;
    }
    
    
    module.exports = router;