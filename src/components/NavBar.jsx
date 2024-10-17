import React, { useEffect } from 'react'
import { ImHome } from "react-icons/im";
import { FaMessage } from "react-icons/fa6";
import { RiNotification2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent } from '../redux/action/actionUser';
function NavBar() {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.allusers.user)
  useEffect(()=>{
    dispatch(getcurrent())
  },[])
  
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <div className='uniquifier'>The Good &nbsp;&nbsp;&nbsp;Food</div>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"30px"}}>
     <div style={{color:"#855c72"}}> <ImHome style={{color:"#855c72"}}/>&nbsp; Home</div>
     <div style={{color:"#855c72"}} ><FaMessage  style={{color:"#855c72"}}/>&nbsp; Message </div> 
     <div style={{color:"#855c72"}}><RiNotification2Fill  style={{color:"#855c72"}}/>&nbsp; Notification</div>  
        </div>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
          <div style={{width:"50px",height:"50px",borderRadius:"50%"}}>
            <img style={{width:"50px",height:"50px",borderRadius:"50%"}} src={user.image} alt="profile"/></div>
          <div style={{color:"#855c72"}}>&nbsp;{user.name}</div>
        </div>
    </div>
  )
}

export default NavBar