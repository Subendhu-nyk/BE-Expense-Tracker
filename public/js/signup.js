
async function OnSubmit(event){
    event.preventDefault();
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const phone=document.getElementById('phone').value
    const password=document.getElementById('password').value
    const obj={
        name,
        email,
        phone,
        password
    }
    console.log(obj)

    try{
        const response= await axios.post('http://localhost:2000/signup',obj)
        console.log(response.data.newUserdata)
        if(response.status===201){
          window.location.href='/'  
        }
        else{
            throw new Error('failed to signup')
        }
    }
    catch (err){
        console.log("failed"+ err)
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
