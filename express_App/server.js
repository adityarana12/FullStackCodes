const logger=require('./middlewares/logger')
const path = require('path');
const express = require('express');
const { json } = require('body-parser');
const app = express();

const staticAssetsPath = path.join(__dirname);
app.use(express.static(staticAssetsPath));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
const PORT=process.env.PORT||3000

app.get('/json',(req,res,next)=>{
     req.time=new Date().toString();
     next();
     },(req,res)=>{
      const {time}=req;
      const data={"time":time};
      const json=JSON.stringify(data);
      res.json(data);
})
app.get('/:word/echo',(req,res)=>{
  const {word}=req.params
  const data={
    echo:word
  }
  res.json(data)
})
app.route('/name')
  .get((req, res) => {
    const { first, last } = req.query;
    const fullName = `${first} ${last}`;
    const response = { name: fullName };
    res.json(response);
  })
  .post((req, res) => {
    const { first, last } = req.body;
    const fullName = `${first} ${last}`;
    const response = { name: fullName };
    res.json(response);
  });
app.listen(PORT,(req,res)=>{
  console.log(`server is running at:${PORT}`)
})