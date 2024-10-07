const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const users = require('../model/userModel');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const found = await users.findOne({ email });
    if (found) {
      return res.status(400).send({ msg: "This email already exists" });
    } else {
      const user = new users(req.body);
      const salt = 10;
      const hashpassword = bcrypt.hashSync(password, salt);
      user.password = hashpassword;
      
      // Génération du token pour la vérification
      const secretkey = "amira@90";
      const verificationToken = jwt.sign({ id: user._id }, secretkey, { expiresIn: '1h' });
      user.verificationToken = verificationToken;

      await user.save();

      // Configurer Nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "amirachoukimechergui@gmail.com",
          pass: "ihlr rrul zebp lqtj",
        },
      });

      const mailOptions = {
        from: "amirachoukimechergui@gmail.com",
        to: email,
        subject: 'Vérifiez votre email',
        html: `<p>Cliquez sur le lien pour vérifier votre email : <a href='http://localhost:5173/blog/confirm/${verificationToken}'>Vérifiez votre email</a></p>`,
      };

      // Envoyer l'email et attendre la réponse
      try {
        await transporter.sendMail(mailOptions);
      } catch (err) {
        console.error('Erreur d\'envoi de l\'email :', err);
        return res.status(500).json({ msg: 'Erreur lors de l\'envoi de l\'email de confirmation' });
      }

      return res.status(201).json({ msg: 'Utilisateur enregistré, veuillez vérifier votre email pour confirmer' });
    }
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    return res.status(500).json({ msg: 'Erreur serveur lors de l\'inscription' });
  }
};

// Fonction pour confirmer l'email
exports.confirmEmail = async (req, res) => {
    try {
      // Utilisation de findOneAndUpdate pour trouver l'utilisateur et mettre à jour directement
      const user = await users.findOneAndUpdate(
        { verificationToken: req.params.token },
        { $set: { isVerified: true, verificationToken: null } }, // Mise à jour des champs
        { new: true } // Retourner l'utilisateur mis à jour
      );
  
      if (!user) {
        return res.status(400).json({ msg: 'Token invalide ou expiré' });
      }
  
      return res.status(200).json({ msg: 'Email confirmé avec succès, veuillez vous connecter.' });
    } catch (error) {
      console.error('Erreur lors de la confirmation de l\'email :', error);
      return res.status(500).json({ msg: 'Erreur serveur lors de la confirmation de l\'email' });
    }
  };
  

  

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      // Vérifier si l'utilisateur existe
      const found = await users.findOne({ email });
      if (!found) {
        return res.status(400).send({ errors: { msg: "Email does not exist" } });
      }
  
      // Vérifier si l'email est confirmé
      if (!found.isVerified) {
        return res.status(400).json({ msg: 'Veuillez confirmer votre email avant de vous connecter.' });
      }
  
      // Vérifier si le mot de passe est correct
      const match = bcrypt.compareSync(password, found.password);
      if (!match) {
        return res.status(400).send({ errors: { msg: "Mot de passe incorrect" } });
      }
  
      // Générer le token JWT et retourner une réponse de succès
      const secretkey = "amira@90";
      const token = jwt.sign({ id: found._id }, secretkey);
      return res.status(200).send({ msg: "Connexion réussie", user: found, token });
    } catch (error) {
      // Gestion des erreurs serveur
      return res.status(500).send({ msg: "Échec de la connexion", error });
    }
  };
  

exports.getcurrent=async(req,res)=>{
    try {
        const user=req.user
        res.status(200).send({user})
    } catch (error) {
        res.status(500).send({error})
    }
}

exports.getusers =async (req,res) =>{
    try {
     const allusers=await users.find()   
     res.status(200).send({msg:"users getted",allusers})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"users not getted",error})
    }
}
exports.resetPassword = async (req, res) => {
    const { email } = req.body;

    // Trouver l'utilisateur par e-mail
    const user = await users.findOne({ email });
    if (!user) {
        return res.status(404).json({ msg: 'Utilisateur non trouvé' });
    }

    const generateRandomCode = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const resetCode = generateRandomCode();
    user.codeReset = resetCode;

    // Définir la date d'expiration pour le code
    user.expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 heure
    await user.save();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "amirachoukimechergui@gmail.com",
            pass: "ihlr rrul zebp lqtj", // Utilisez un mot de passe d'application pour la sécurité
        },
    });

    const mailOptions = {
        from: "amirachoukimechergui@gmail.com",
        to: email,
        subject: 'Code de validation',
        html: `<p>Votre code de réinitialisation est : <strong>${resetCode}</strong></p>`,
    };

    // Envoyer l'email et attendre la réponse
    try {
        await transporter.sendMail(mailOptions);
        return res.status(201).json({ msg: 'Un e-mail a été envoyé avec les instructions pour réinitialiser votre mot de passe.' });
    } catch (err) {
        console.error('Erreur d\'envoi de l\'email :', err);
        return res.status(500).json({ msg: 'Erreur lors de l\'envoi de l\'email de confirmation' });
    }
};
exports.codePassword=async(req,res)=>{
  const {codeReset}=req.body
  try {
    const user = await users.findOne({ codeReset });
    if(user){
      return res.status(200).send({ msg: 'Utilisateur trouve' });
     }
     else{ return res.status(400).send({ msg: 'code invalide' });}
  } catch (error) {
    return res.status(500).send({ msg: 'code failed' },error);
  }
  
}