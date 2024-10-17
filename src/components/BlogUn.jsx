import React from 'react';

function BlogUn({ setSearchBlog, setSearchContact }) {
  return (
    <div style={{ backgroundColor: "white", padding: "10px", margin: "20px 0 20px 20px", borderRadius: "10px" }}>
      Recherche
      <hr />
      <div style={{
        width: "250px",
        fontFamily: "Poppins, sans-serif",
        fontSize: "20px",
        fontWeight: "600",
        color: "#855c72",
        margin: "20px"
      }}>
        Blog :<br />
        <input style={{ maxWidth: "200px" }} onChange={(e) => setSearchBlog(e.target.value)} />
      </div>

      <div style={{
        width: "250px",
        fontFamily: "Poppins, sans-serif",
        fontSize: "20px",
        fontWeight: "600",
        color: "#855c72",
        margin: "20px"
      }}>
        Contact :<br />
        <input style={{ maxWidth: "200px" }} onChange={(e) => setSearchContact(e.target.value)} />
      </div>
    </div>
  );
}

export default BlogUn;
