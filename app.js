const express=require('express')
const app=express()
const path=require('path')
const sequelize=require('./util/expense')
const Sequelize = require('./models/expense')
const userSequelize = require('./models/user')
const bodyParser=require('body-parser')
const router=require('./routes/expense')
const loginRouter=require('./routes/user')
app.use(express.json());
const cors=require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'views')));
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',router)
app.use('/login',loginRouter)
app.use('/signup',loginRouter)



  Sequelize.sync().then((result)=>{
    console.log(result)
  })

  userSequelize.sync().then((result)=>{
    console.log(result)
  })

app.listen(2000)



