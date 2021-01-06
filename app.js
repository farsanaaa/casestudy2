const express=require('express');
const app =  express();
const port=process.env.PORT || 5000;
const nav=[
    {
        link:'/books', name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
    link:'/addbooks',name:'Add Book'
    },
    {
    link:'/addauthors', name:'Add Author'
    },
    {
        link:'/signin', name:'Signin'
    },
    {
        link:'/signup',name:'SignUp'
    }
];

const booksRouter=require('./src/routes/bookRoutes')(nav)
const authorsRouter=require('./src/routes/authorRoutes')(nav)
const addbooksRouter = require('./src/routes/addbookRoutes')(nav)
const addauthorsRouter = require('./src/routes/addauthorRoutes')(nav)
const signinRouter = require('./src/routes/signinRoutes')(nav)
const signupRouter = require('./src/routes/signupRoutes')(nav)



app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbooks',addbooksRouter);
app.use('/addauthors',addauthorsRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);




app.get('/', function(req,res){
    
    res.render("index",{
        nav,
        title:'Library'
       
    });
   
});

app.listen(port,()=>{console.log("Server Ready at"+ port)});