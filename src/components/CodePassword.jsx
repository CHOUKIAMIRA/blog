import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Assurez-vous d'importer axios

function CodePassword() {
  const [message, setMessage] = useState('');
  const [codeReset, setCodeReset] = useState('');
  const navigate = useNavigate(); // Utiliser useNavigate pour la redirection

  const handelCode = async () => {
    try {
      const response = await axios.post("http://localhost:8000/blog/code-password", { codeReset });
      sessionStorage.setItem('codeReset',codeReset);
      if (response.status === 200) {
        navigate('/blog/set');

      } else {
        alert("Le code n'est pas valide");
      }
    } catch (error) {
      console.error('Erreur lors de la vérification du code:', error);
      alert("Une erreur est survenue lors de la vérification du code.");
    }
  };

  useEffect(() => {
    // Récupérer le message du sessionStorage
    const resetMessage = sessionStorage.getItem('resetMessage');
    console.log("Message récupéré du sessionStorage:", resetMessage); // Vérifiez si le message est récupéré
    if (resetMessage) {
      setMessage(resetMessage);
      // Supprimer le message après qu'il soit affiché
       sessionStorage.removeItem('resetMessage');
    }
  }, []);

  return (
    <div className='container'>
   <div className='home'>
      <div> 
        <p style={{ fontSize: "25px", color: "#B8B8B8" }}>Don't have an account?</p>
        <Link to="/blog/register"> 
          <button className='btn'>REGISTER</button>
        </Link>
      </div>

      <div className='login'>
        <h6>Reset your password</h6>
        <p style={{ fontSize: "20px", color: "#B8B8B8", margin: "30px 15px" }}>
          If the account exists, we will email you instructions to reset the password.
        </p>
        <hr /><br />
        <input type="text" placeholder='Code' onChange={(e) => setCodeReset(e.target.value)} />
        <div>
          <Link to="/blog/">
            <button className='btn-login' style={{ backgroundColor: "white" }}>Return to login</button>
          </Link>&nbsp;
          <button className='btn-login' onClick={handelCode}>Continuer</button>
        </div>

       
        {message && <p style={{ color: 'green', fontSize: '18px', marginTop: '20px' }}>{message}</p>}
      </div>
    </div>
    </div>
  );
}

export default CodePassword;
