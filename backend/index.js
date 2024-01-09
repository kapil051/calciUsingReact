const express=require("express");
const cors=require("cors");

     const app=express();

    const port=3000;

    app.use(express.json());  
    app.use(cors()); 
  
      

     app.get('/',(req,res)=>{  
           res.json({"msg":"hello from backend"});
     })

    app.get("/add",(req,res)=>{
        let a=parseInt(req.query.a);
        let b=parseInt(req.query.b);
        if (isNaN(a) || isNaN(b)) {
            res.status(400).send("Invalid parameters: Please provide valid numbers for 'a' and 'b'.");
            return;
        }
           let result=a+b;
         res.send(result.toString());
    })

     app.get("/subtract",(req,res)=>{
        let a=parseInt(req.query.a);
        let b=parseInt(req.query.b);
        if (isNaN(a) || isNaN(b)) {
            res.status(400).send("Invalid parameters: Please provide valid numbers for 'a' and 'b'.");
            return;
        }
           let result=a-b;
         res.send(result.toString()); 
     })

     app.get("/multiply",(req,res)=>{
        let a=parseInt(req.query.a);
        let b=parseInt(req.query.b);
        if (isNaN(a) || isNaN(b)) {
            res.status(400).send("Invalid parameters: Please provide valid numbers for 'a' and 'b'.");
            return;
        }
           let result=a*b;
         res.send(result.toString()); 
     })

     app.get("/divide",(req,res)=>{
        let a=parseInt(req.query.a);
        let b=parseInt(req.query.b);
        if (isNaN(a) || isNaN(b)) {
            res.status(400).send("Invalid parameters: Please provide valid numbers for 'a' and 'b'.");
            return;
        }
           let result=a/b;
         res.send(result.toString()); 
     })

     app.get("/modulo",(req,res)=>{
        let a=parseInt(req.query.a);
        let b=parseInt(req.query.b);
        if (isNaN(a) || isNaN(b)) {
            res.status(400).send("Invalid parameters: Please provide valid numbers for 'a' and 'b'.");
            return;
        }
           let result=a%b;
         res.send(result.toString()); 
     })

  app.use((err,req,res,next)=>{
        res.status(404).json({"msg":"invalid input from last handler"});
           next();
  })

app.listen(port,()=>{
      console.log(`app listening on the port ${port}`);
}) 
