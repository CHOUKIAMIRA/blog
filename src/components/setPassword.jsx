import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatepassword } from '../redux/action/actionUser';

function SetPassword() {
  const [nvPassword, setNvPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelRestPassword = async (e) => {
    e.preventDefault();

    // Récupération du code de réinitialisation depuis sessionStorage
    const codeReset = sessionStorage.getItem('codeReset');

    if (nvPassword === confirmPassword) {
      if (codeReset) {
        try {
          // Dispatch de l'action pour mettre à jour le mot de passe
          await dispatch(updatepassword({ nvPassword, codeReset }, navigate));
          setMsg('Mot de passe réinitialisé avec succès.');
        } catch (error) {
          setMsg(error.message); // Affiche un message d'erreur si quelque chose ne va pas
        }
      } else {
        setMsg("Erreur : le code de réinitialisation n'est pas disponible.");
      }
    } else {
      setMsg("Les mots de passe ne correspondent pas.");
    }

    // Réinitialiser le message après 3 secondes
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <div className='container'>
    <div className='home'>
      <div>
        <p style={{ fontSize: '25px', color: '#B8B8B8' }}>Don't have an account?</p>
        <Link to='/blog/register'>
          <button className='btn'>REGISTER</button>
        </Link>
      </div>

      <div className='login'>
        <h6>New password</h6>
        <br />
        <input
          type='password'
          placeholder='nouveau password'
          onChange={(e) => setNvPassword(e.target.value)}
        />
        <input
          type='password'
          placeholder='Confirmer password'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div style={{ marginTop: '30px' }}>
          <Link to='/blog/'>
            <button className='btn-login' style={{ backgroundColor: 'white' }}>
              Return to login
            </button>
          </Link>
          &nbsp;
          <button className='btn-login' onClick={handelRestPassword}>
            Reset Password
          </button>
        </div>

        {/* Afficher le message si nécessaire */}
        {msg && <p style={{ color: 'red' }}>{msg}</p>}
      </div>
    </div>
    </div>
  );
}

export default SetPassword;
