const express=require('express')
const router=express.Router()
const path=require('path')
const bodyParser=require('body-parser')
const userController=require('../controllers/user')
router.use(express.json());
const cors=require('cors')
router.use(cors())
router.use(express.static(path.join(__dirname,'..','public')))
router.use(express.static(path.join(__dirname, '..', 'views')));
router.use(bodyParser.urlencoded({extended:false}))

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..','views', 'login.html'));
  });

router.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','signup.html'))
})


  router.post('/user/login',userController.loginPostController);
  
router.get('/user/login',userController.loginGetController)




router.post('/user/signup',userController.loginUserController);

module.exports=router;