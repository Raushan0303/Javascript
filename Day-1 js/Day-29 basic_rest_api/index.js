const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 7894;


//mimic database using Array
let bloglist = [];
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger);

function logger(req,res, next){
    console.log(req.url);
    console.log(req.body);
    let condition = true;
    if(condition){
        return res.status(500).json({
            message : "Something went wrong"
        })
    }
    next();
}
function isAuthenticated(req, res,next){
    console.log("Yes user is Authenticated");
    next();
}



app.get('/blogs',logger,isAuthenticated,(req,res)=>{
    console.log("Hitting");
    return res.status(404).json({
        data: bloglist,
        success : true,
    });

});

app.post('/blogs',(req,res)=>{
    console.log(req.body);
    bloglist.push({
        title: req.body.title, 
        content: req.body.content,
        id : Math.floor(Math.random()*1000)

    });
    return res.status(201).json({
        success: true,
    });

});

app.get('/blogs/:id',(req,res)=>{
     const result =   bloglist.filter((blog)=> blog.id == req.params.id);
    return res.status(200).json({
        data : result,
        success: true
    })
})
 


app.listen(PORT, ()=>{
    console.log("Server started on PORT", PORT);
});
