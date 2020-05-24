import express from 'express';

const app = express();
const port = 3000;

app.get('/api/test',function(req,res){
    // res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello World!');
});

app.get('/api/test1',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello World1!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

