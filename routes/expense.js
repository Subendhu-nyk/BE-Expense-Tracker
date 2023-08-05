const express=require('express')
const router=express.Router()
const path=require('path')
const Sequelize=require('../models/expense')
const bodyParser=require('body-parser')
const postExpenseController=require('../controllers/expense')
router.use(express.json());
const cors=require('cors')
router.use(cors())
router.use(express.static(path.join(__dirname,'public')))
router.use(express.static(path.join(__dirname, '..', 'views')));
router.use(bodyParser.urlencoded({extended:false}))

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'))
})
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..','views', 'login.html'));
});
  
  router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..','views', 'signup.html'));
  });

router.post('/expense/add-expense',postExpenseController.postExpense );

  router.get('/expense/get-expense',postExpenseController.getExpense)

router.delete('/expense/delete-expense/:id',postExpenseController.deleteExpense)

module.exports=router;