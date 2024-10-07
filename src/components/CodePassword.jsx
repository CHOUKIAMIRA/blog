import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CodePassword() {
  const [message, setMessage] = useState('');

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
        <input type="text" placeholder='Code' />
        <div>
          <Link to="/blog/">
            <button className='btn-login' style={{ backgroundColor: "white" }}>Return to login</button>
          </Link>&nbsp;
          <button className='btn-login'>Continuer</button>
        </div>

        {/* Affichage du message récupéré */}
        {message && <p style={{ color: 'green', fontSize: '18px', marginTop: '20px' }}>{message}</p>}
      </div>
    </div>
  );
}

export default CodePassword;
