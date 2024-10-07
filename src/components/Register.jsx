import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { registeruser } from '../redux/action/actionUser';
function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handle_register=()=>{
    dispatch(registeruser({name,email,password},navigate))
  }
  const message=useSelector((state)=>state.allusers.msg)
  // useEffect(() => {
  //   if (message) {
  //     alert(message);  // Affiche le message via une alerte
  //   }
  // }, [message]);
  const errors=useSelector((state)=>state.errors)
console.log(errors)
    if (errors.length>0){
      errors.map(e=>
      alert(e.msg)
      )
    }
  return (

<div className='home'> 
   <div className='login'>
        <h6>REGISTER</h6>
      <div className='link-ls'>  <p style={{fontSize:"17px"}}>Already have an account?</p>
      <Link to="/blog/" style={{fontSize:"17px"}} > Log in</Link></div>
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"10px",margin:"20px auto",cursor:"pointer",width:"200px",border:"1px solid #B8B8B8",borderRadius:"10px"}}>
         <p style={{fontSize:"25px",color:"black"}}>Google</p>
        <FcGoogle style={{fontSize:"25px"}}/>
      </div>
      <p style={{fontSize:"25px",color:"#B8B8B8"}}>- OR -</p>
      <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
       <div >
     <button className='btn-login' onClick={handle_register}>Register</button></div>
     {message && <p style={{fontSize:"25px"}}>{message}</p>}
    </div>
    <div>
    <p style={{fontSize:"25px",color:"#B8B8B8"}}> Have an account?</p> 
    <Link to="/blog/"> <button className='btn'>LOGIN</button></Link>
    </div>
    </div>
    )
  }
  
  export default Register