import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { loginuser } from '../redux/action/actionUser';
import { useDispatch, useSelector } from 'react-redux';
function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handle_login=()=>{
    dispatch(loginuser({email,password},navigate))
  }
  const msg=useSelector((state)=>state.allusers.msg)
  useEffect(() => {
    if (msg) {
      alert(msg);  // Affiche le message via une alerte
    }
  }, [msg]);
  const errors=useSelector((state)=>state.errors)
console.log(errors)
    if (errors.length>0){
      errors.map(e=>
      alert(e.msg)
      )
    }
  return (
    <div className='home'>
  
    <div> 
    <p style={{fontSize:"25px",color:"#B8B8B8"}}>Don't have an account?</p>
    <Link to="/blog/register"> <button className='btn'>REGISTER</button></Link>
    </div>
   
    <div className='login'>
        <h6>LOGIN</h6>
      <div className='link-ls'>  <p style={{fontSize:"17px"}}>Don't have an account?</p>
      <Link to="/blog/register" style={{fontSize:"17px"}} > REGISTER</Link></div>
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"10px",margin:"20px auto",cursor:"pointer",width:"200px",border:"1px solid #B8B8B8",borderRadius:"10px"}}>
         <p style={{fontSize:"25px",color:"black"}}>Google</p>
        <FcGoogle style={{fontSize:"25px"}}/>
      </div>
      <p style={{fontSize:"25px",color:"#B8B8B8"}}>- OR -</p>
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
       <div ><Link to="/blog/forget"><button className='btn-login' style={{backgroundColor:"white"}}>Forget Password?</button></Link>&nbsp;
     <button className='btn-login' onClick={handle_login}>Login</button></div>
   
    
    </div>
    
    </div>
  )
}

export default Login