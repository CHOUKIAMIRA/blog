import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Assurez-vous que cette ligne est correcte

const ConfirmEmail = () => {
  const { token } = useParams(); // Récupérer le token de l'URL
  const navigate = useNavigate(); // Hook pour la redirection
  const [message, setMessage] = useState(''); // État pour stocker les messages à afficher
  const [error, setError] = useState(false); // État pour gérer les erreurs

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/blog/confirm/${token}`); // Requête pour vérifier l'email

        if (response.status === 200) {
          setMessage('Email confirmé avec succès. Redirection vers la page de connexion...');
          setError(false);

          // Rediriger vers la page de connexion après 3 secondes
          setTimeout(() => {
            navigate('/blog/');
          }, 3000);
        }
      } catch (error) {
        console.error('Erreur lors de la vérification de l\'email:', error);
        setMessage('Erreur lors de la confirmation de l\'email. Veuillez réessayer.');
        setError(true);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{error ? 'Erreur' : 'Confirmation Email'}</h2>
      <p>{message}</p>
      {error && <p style={{ color: 'red' }}>Le lien est invalide ou a expiré.</p>}
    </div>
  );
};

export default ConfirmEmail;
