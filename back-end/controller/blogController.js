const Blog = require("../model/blogModel"); // Utilisez Blog pour l'importation du modèle
const User = require("../model/userModel"); // Utilisez User pour l'importation du modèle utilisateur

exports.addBlog = async (req, res) => {
    const { title, description, image, userId } = req.body;

    try {
        // Initialisation correcte de `Blog`
        const blog = new Blog({
            title,
            description,
            image,
            userId
        });
        
        // Enregistrement du blog
        await blog.save();
        return res.status(201).json({ message: "Blog ajouté avec succès", blog });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de l'ajout du blog", error: error.message });
    }
};
exports.getBlog=async(req,res)=>{
    try {
       const allBlogs = await Blog.find().populate("userId")
       res.status(200).send({msg:"blog get successfully",allBlogs})
    } catch (error) {
        res.status(500).send({msg:"blog not geted",error})
    }
    }

    exports.likeBlog = async (req, res) => {
        try {
          // Récupérer le blog à partir de son ID
          const blog = await Blog.findById(req.params.id);
      
          if (!blog) {
            return res.status(404).json({ message: "Blog non trouvé" });
          }
      
          // Vérifier si le username est déjà dans le tableau 'like'
          const name = req.body.name; // Le nom d'utilisateur doit être envoyé dans le body de la requête
          if (!name) {
            return res.status(400).json({ message: "Le nom d'utilisateur est requis" });
          }
      
          if (blog.like.includes(name)) {
            return res.status(400).json({ message: "Vous avez déjà aimé ce blog" });
          }
      
          // Ajouter le nom d'utilisateur dans le tableau 'like'
          blog.like.push(name);
      
          // Enregistrer les modifications
          await blog.save();
      
          // Répondre avec le blog mis à jour
          return res.status(200).json(blog);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "Erreur serveur" });
        }
      };
       