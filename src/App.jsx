import React from 'react'; 

import './App.css'

import Acceuil from './components/Acceuil';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ConfirmEmail from './components/ConfirmEmail';
import ForgetPassword from './components/ForgetPassword';
import CodePassword from './components/CodePassword';
import SetPassword from './components/setPassword';
import Profil from './components/Profil';
function App() {


  return (
    <div >
      <Routes>
      <Route path="/blog/" element={<Login/>} />
        <Route path="/blog/register" element={<Register/>} />
        <Route path="/blog/acceuil" element={<Acceuil/>} />
        <Route path="/blog/profil" element={<Profil/>} />
        <Route path="/blog/forget" element={<ForgetPassword/>} />
        <Route path="/blog/code" element={<CodePassword/>} />
        <Route path="/blog/set" element={<SetPassword/>} />
        <Route path="/blog/confirm/:token" element={<ConfirmEmail/>} />
      </Routes>
   

    </div>
  )
}

export default App
