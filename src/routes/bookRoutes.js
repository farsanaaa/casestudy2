const express=require('express');

const booksRouter=express.Router();
const Bookdata = require('../model/bookdata');
function router(nav){
var books=[
    {
        title:'The call of the wild',
        author:'Jack London',
        genre:'Action and adventure',
        img: "action1.jpg"
    },
    {
        title:'To kill a mocking bird',
        author:'Harper Lee',
        genre:'Classics',
        img: "1.jpg"
    },
    {
        title:'The three musketeers',
        author:'Alexandre Dumas',
        genre:'Action and adventure',
        img: "action2.jpg"
    },
    {
        title:'Life of Pie',
        author:'Yann Martel',
        genre:'Action and adventure',
        img: "action3.jpg"
    },
  
    {
        title:'Watchmen',
        author:'Alan Moore',
        genre:'Comics',
        img: "4.jpg"
    },
    {
        title:'Beloved',
        author:'Toni Morrison',
        genre:'Action and adventure',
        img: "3.jpg"
    },
    {
        title:'The boy, the mole, the fox, and the horse',
        author:'Charlie Mackesy',
        genre:'Graphic Novel',
        img: "5.jpg"
    },
    {
        title:'Little women',
        author:'Louisa May Alcott',
        genre:'Classics',
        img: "2.jpg"
    }
    ]  
    
    booksRouter.get('/', function(req,res){
        res.render("books",{
            nav,
            title: 'Library',
            books
        });
    }); 
    
    booksRouter.get('/delete/:id',function(req,res){
        
        Bookdata.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {
                res.redirect('/books');
            }
            else { console.log('Error in  delete :' + err); }
        });
    });


    booksRouter.get('/update/:id', (req, res) => {
        Bookdata.findById(req.params.id, (err, doc) => {
            if (!err) {
                res.render("/addbooks", {
                    viewTitle: "Update ",
                    Bookdata: doc
                });
            }
        });
    });
    
    booksRouter.get('/:i',function(req,res){
        const i=req.params.i
        
        res.render("book",{
            nav,
            title: 'Library',
            book:books[i]
        });
    
    });

    return booksRouter;
}

    module.exports= router;