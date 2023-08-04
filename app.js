const express=require('express')
const app=express()
const path=require('path')
const sequelize=require('./util/expense')
const Sequelize = require('./models/expense')
const bodyParser=require('body-parser')
const router=require('./routes/expense')
app.use(express.json());
const cors=require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:false}))

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','expense.html'))
// })

// app.post('/user/add-expense', async (req, res) => {
//     try {
//       const name = req.body.name;
//       const price = req.body.price;
//       const date=  req.body.date;
//       const category = req.body.category;
    
       
//       const data = await Sequelize.create({
//         Itemname: name,
//         price: price,
//         date:date,
//         category: category,
       
//       });        
//       res.status(201).json({ newexpenseDetail: data });
//     } catch (err) {       
//     res.status(500).json({ error: err }) 
//     }
//   });

//   app.get('/user/get-expense',async(req,res)=>{
//     try{
//     const expenses=await Sequelize.findAll();
//     res.status(200).json({allExpenses:expenses});
//     }catch(err){
//         console.log('get user is failing', JSON.stringify(err))
//         res.status(500).json({error:err })
//     }
// })

// app.delete('/user/delete-expense/:id',async(req,res)=>{
//   try{

//       if(req.params.id=='undefined'){
//           console.log('ID is missing')
//           return res.status(400).json({err:'ID is missing'})
//       }
//   const uId=req.params.id;
//   await Sequelize.destroy({where:{id:uId}})
//       res.sendStatus(200);
//   }
//   catch(err){
//       console.log(err)
//       res.status(500).json(err)
//   }
// })

app.use('/',router)



  Sequelize.sync().then((result)=>{
    console.log(result)
  })


app.listen(2000)



