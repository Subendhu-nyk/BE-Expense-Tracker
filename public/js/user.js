async function OnSubmit(event){
    event.preventDefault();
    const email=document.getElementById('email').value            
    const password=document.getElementById('password').value
    const obj={                
        email,
        password
    }
    

    try{
        const response= await axios.post('http://localhost:2000/user/login',obj)
        console.log(response.data.newUserdata)
        if(response.status===201){
          window.location.href='/expense.html'  
        }
        else{
            throw new Error('failed to login')
        }
    }
    catch (err){
        console.log(err)
    }

}
async function showPassword(){
    try{
        const response= await document.getElementById('password')
        if (response.type==="password"){
            response.type="text";
        }
        else{
            response.type='password';
        }
    }
    catch(err){
        console.log(err)
    }

}