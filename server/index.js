const express = require('express');
const cors= require('cors');
const fileupload= require('express-fileupload');
const mycon= require('mysql');


const app=express();
app.use(cors());
app.use(fileupload());
app.use(express.json());
app.use(express.static('public'));


let con=mycon.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Kgisl@123",
    database:"college"
})

con.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Database Connected");
    }

})

app.post("/Signup",(request,response)=>{
    let {rolesignup,firstnamesignup,lastnamesignup,dobsignup,genderselectsignup,phonesignup,emailsignup,passwordsignup}=request.body;
    let sql ="insert into details(User_name,First_name,Last_name,DOB,Gender,Phone_no,Role,Email,Password) values(?,?,?,?,?,?,?,?,?)";

    con.query(sql,[emailsignup,firstnamesignup,lastnamesignup,dobsignup,genderselectsignup,phonesignup,rolesignup,emailsignup,passwordsignup],(error,result)=>{
        if(error){
            let s={"status":"error"};
            response.send(s);
        }
        else{
            let s={"status":"success"};
            response.send(s);
        }
    })
    
})

app.post('/Signin',(request,response)=>{

    let {usernamesignin,passwordsignin}=request.body;
   

    let sql='select * from details where User_name=?'

    con.query(sql,[usernamesignin],(error,result)=>{
        if(error){
            let s={"status":"Syntax_error"};
            response.send(s);
        }
        else if(result.length>0){
            let username1 =result[0].User_name;
            let password1 =result[0].Password;
            let Id =result[0].Id;
            let Role=result[0].Role;

            if(username1 === usernamesignin && password1 === passwordsignin){
                let s={"status":"success","Id":Id,"Role":Role}
                response.send(s);
            }
            else{
                let s={"status":"Invaild_user"}
                response.send(s);
            }          
        }
        else{
            let s={"status":"error"}
            response.send(s);
        }
    })
})

app.listen(3002,()=>console.log("Server is running in port:3002"));