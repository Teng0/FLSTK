import express from "express";
//const { on } = require("nodemon");
import { listings } from "./listing";
import bodyParser from "body-parser";
const app = express();
const port = 9000;

app.use(bodyParser.json());

const one:number = 1;
const two:number = 2;
const three:boolean= true;



app.get("/", (req, res) => res.send(`1 +2 = ${one + two}`));

app.get("/listings",(_req,res)=>{
   
    return res.send(listings);
});
app.post("/delete-listing",(req,res)=>{
    const id  = req.body.id;
    
    //return res.send(listings);  
    for(let i=0; i<listings.length;i++){
        if(listings[i].id == id){       
             return res.send(listings.splice(i,1));
        }
    }

    return res.send(id);
});

app.listen(port);
console.log(`[app]: http://localhost:${port}  `);
