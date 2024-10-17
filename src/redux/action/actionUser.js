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
    
     export const updatepassword = (data, navigate) => async (dispatch) => {
        try {
          // Envoi de la requête PUT pour mettre à jour le mot de passe avec le code de réinitialisation
          await axios.put("http://localhost:8000/blog/update-password", data);
      
          // Si la mise à jour est réussie, dispatch l'action pour mettre à jour les informations de l'utilisateur
          dispatch(getcurrent());
      
          // Redirection vers la page de connexion après le succès
          navigate("/blog/");
        } catch (error) {
          // Affiche l'erreur dans la console pour débogage
          console.error("Erreur lors de la mise à jour du mot de passe :", error.response.data);
      
          // Afficher un message d'erreur à l'utilisateur
          throw new Error(error.response?.data?.msg || "Erreur lors de la mise à jour du mot de passe.");
        }
      };
      
     