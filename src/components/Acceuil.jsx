import React, { useState } from 'react';
import NavBar from './NavBar';
import Blog from './Blog';
import BlogDeux from './BlogDeux';
import BlogUn from './BlogUn';

function Acceuil() {
  const [searchContact,setSearchContact]=useState("")
  const [searchBlog,setSearchBlog]=useState("")
  return (
    <div style={{ backgroundColor: "#eae8e8", position: "relative" }}>
    
      <div style={{
        position: "fixed",
        zIndex: "1000 !important",  // Ajout de !important pour tester les conflits
        width: "100vw", 
        height: "100px",
        top: "0",
        backgroundColor: "white",  // Couleur de fond pour tester la superposition
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" // Optionnel : pour voir l'élément clairement
      }}>
        <NavBar />
      </div>

      {/* Contenu principal */}
      <div style={{
        marginTop: "100px", // Espace sous la NavBar
        display: "grid",
        gridTemplateColumns: "23% 50% auto",
        gap: "10px",
        paddingTop: "20px"
      }}>
        <div><BlogUn setSearchBlog={setSearchBlog} setSearchContact={setSearchContact}/></div>
        <div><Blog searchBlog={searchBlog}/></div>
        <div><BlogDeux searchContact={searchContact}/></div>
      </div>
    </div>
  );
}

export default Acceuil;
