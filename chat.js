const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const Data = []


app.use(bodyParser.urlencoded({extended:false}));

app.get('/login', (req,res,next) => {
    res.send(`
    <form action = "/message" onsubmit="localStorage.setItem('username',document.getElementById('username').value)"
    method="POST"> 
      <input id='username' type="text" name ="username" placeHolder="username">
      <button type='submit'>Add USER</button>
      </form>`)

})


app.post('/message',(req,res,next) => {
   res.redirect('/')
    
})

app.get('/', (req,res,next) =>{
    res.send(`
    <form action ='/' onsubmit = "document.getElementById('username').value = localStorage.getItem('username')"
    method='POST'>
    <input type = "text" id="message" name="message" placeHolder="message">
    <input type="hidden" name="username" id="username">
    <button type="submit">Send</button>
    </form>`)

})

app.post('/',(req,res,next) => {

    Data.push(`{${req.body.username}:${req.body.message}}`)
    console.log(req.body)
    console.log(Data)
    res.redirect('/');
})

// app.get('/',(req,res,next) =>{
    
//     res.send( 'thank you')
// })



app.listen(1999)