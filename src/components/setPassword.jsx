import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SetPassword() {
   
  return (
    <div className='home'>
  
    <div> 
    <p style={{fontSize:"25px",color:"#B8B8B8"}}>Don't have an account?</p>
    <Link to="/blog/register"> <button className='btn'>REGISTER</button></Link>
    </div>
   
    <div className='login'>
        <h6>Reset your password</h6>
     
      <p style={{fontSize:"20px",color:"#B8B8B8",margin:"30px 15px"}}>If the account exist, we will email you instructions to reset the password.</p>
       <hr/><br/> <input type="password" placeholder='nouveau password' onChange={(e)=>setEmail(e.target.value)}/>
       <input type="password" placeholder='Confirmer password' onChange={(e)=>setEmail(e.target.value)}/>

        <div ><Link to="/blog/"><button className='btn-login' style={{backgroundColor:"white"}}>Return to login</button></Link>&nbsp;
     <Link to=""><button className='btn-login'  >Reset Password</button></Link></div>
   
    
    </div>
    
    </div>
  )
}

export default SetPassword