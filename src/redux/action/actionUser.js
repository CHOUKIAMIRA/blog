import axios from "axios"
import {  GETCURRENT, GETUSERS, LOGIN, LOGOUT, REGISTER } from "../actionType/actionTypeUser"
import { alert_error } from "./actionError"

export const registeruser = (data,navigate)=>async(dispatch)=>{
try {
    const res = await axios.post("http://localhost:8000/blog/register",data)
dispatch({
    type:REGISTER,
    payload:res.data
})


    navigate("/blog/"); 


} catch (error) {
   console.log(error) 
   error.response.data.errors.forEach(el => {
    dispatch(alert_error(el.msg))
   });
}
}



export const loginuser = (data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post("http://localhost:8000/blog/login",data)
        
        dispatch({
        type:LOGIN,
        payload:res.data
    })
     navigate("/blog/acceuil")
       
    } catch (error) {
       console.log(error)
       error.response.data.errors.forEach(el => {
        dispatch(alert_error(el.msg))
       }); 
    }
    }



    
    export const getcurrent=()=>async(dispatch)=>{
        const config={
            headers:{
                token:localStorage.getItem("token")
            }
        }
        try {
            const res=await axios.get("http://localhost:8000/blog/current",config)
            dispatch({
                type: GETCURRENT,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
    export const logout =(navigate)=>{
navigate("/")
return {
    type: LOGOUT
}
    }
    
    export const getusers =() => async(dispatch)=>{
        try {
        const res=await axios.get("http://localhost:8000/blog/users")
           dispatch({
             type:GETUSERS,
             payload:res.data
           })
        } catch (error) {
         console.log(error)
        }
     }