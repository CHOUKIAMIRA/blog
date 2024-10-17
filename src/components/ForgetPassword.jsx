import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ForgetPassword() {
    const [email,setEmail]=useState("")
    const navigate=useNavigate()
    const handelReset=async()=>{
        try {
            const response = await axios.post("http://localhost:8000/blog/reset-password", { email });
            console.log(response.data.msg); // Vous pouvez afficher un message de succès ici
            sessionStorage.setItem('resetMessage', response.data.msg);
            navigate('/blog/code'); // Naviguer après avoir reçu la réponse
        } catch (error) {
            console.error('Erreur lors de la vérification de l\'email:', error);
        }
    };
  return (
    <div className='container'>
    <div className='home'>
    <div> 
    <p style={{fontSize:"25px",color:"#B8B8B8"}}>Don't have an account?</p>
    <Link to="/blog/register"> <button className='btn'>REGISTER</button></Link>
    </div>
   
    <div className='login'>
        <h6>Reset your password</h6>
     
      <p style={{fontSize:"20px",color:"#B8B8B8",margin:"30px 15px"}}>If the account exist, we will email you instructions to reset the password.</p>
       <hr/><br/> <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <div ><Link to="/blog/"><button className='btn-login' style={{backgroundColor:"white"}}>Return to login</button></Link>&nbsp;
     <Link to="/blog/code"><button className='btn-login' onClick={handelReset} >Reset Password</button></Link></div>
   
    
    </div>
    </div>
    </div>
  )
}

export default ForgetPassword