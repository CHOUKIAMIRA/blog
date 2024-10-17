import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoIosShareAlt } from "react-icons/io";
function Blog(searchBlog) {
  return (
  <div>
        <div style={{backgroundColor:"white",padding:"10px",margin:"20px",borderRadius:"10px"}}>
           <div style={{display:"flex",alignItems:"center"}}>
            <div style={{width:"50px",height:"50px",border:"1px solid black",borderRadius:"50%"}}></div>
           <div style={{ width:"250px",
        fontFamily: "Poppins, sans-serif",
        fontSize:" 23px",
        fontWeight: "600", 
        color: "#855c72"}}>&nbsp;name user Blog </div>
           </div>
           <div style={{maxHheight:"100px",margin:"20px 20px 0 20px",border:"1px solid black"}}>text</div>
           <div style={{maxHheight:"200px",margin:"20px 20px 0 20px",border:"1px solid black"}}>image</div> 
         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div  style={{display:"flex",alignItems:"center"}}> 
         <div><FaRegHeart  style={{color:"#855c72",fontSize:"25px",margin:"20px 5px"}}/></div> 
        <div>20</div>
        </div>
        <div  style={{display:"flex",alignItems:"center"}}> 
        <div>13</div>
         <div><FiMessageCircle  style={{color:"#855c72",fontSize:"25px",margin:"20px 5px"}}/></div> 
        </div> 
          </div> 
          <hr/>
          <div style={{height:"50px",margin:"20px 20px 0 20px",
            display:"flex",justifyContent:"space-around",alignItems:"center"
          }}>
            <div style={{display:"flex",alignItems:"center"}}>
            <FaRegHeart  style={{color:"#855c72",fontSize:"25px",margin:"20px 5px"}}/>
            <p>J'adore</p>
            </div>

            <div style={{display:"flex",alignItems:"center"}}>
            <FiMessageCircle  style={{color:"#855c72",fontSize:"25px",margin:"20px 5px"}}/>
            <p>Commenter</p>
            </div>

            <div style={{display:"flex",alignItems:"center"}}>
            <IoIosShareAlt   style={{color:"#855c72",fontSize:"25px",margin:"20px 5px"}}/>
            <p>Partager</p>
            </div>
          </div>
         
         
        </div>

        <div style={{backgroundColor:"white",padding:"10px",margin:"20px",borderRadius:"10px"}}>
           <div style={{display:"flex",alignItems:"center"}}>
            <div style={{width:"50px",height:"50px",border:"1px solid black",borderRadius:"50%"}}></div>
            <div style={{ width:"250px",
        fontFamily: "Poppins, sans-serif",
        fontSize:" 23px",
        fontWeight: "600", 
        color: "#855c72"}}>&nbsp;name user Blog </div>
           </div>
           <div style={{maxHheight:"100px",margin:"20px 20px 0 20px",border:"1px solid black"}}>text</div>
           <div style={{maxHheight:"200px",margin:"20px 20px 0 20px",border:"1px solid black"}}>image</div> 
         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div  style={{display:"flex",alignItems:"center"}}> 
         <div><FaRegHeart  style={{color:"#855c72",fontSize:"25px",margin:"20px 5px"}}/></div> 
        <div>20</div>
        </div>
        <div  style={{display:"flex",alignItems:"center"}}> 
        <div>13</div>
         <div><FiMessageCircle  style={{color:"#855c72",fontSize:"25px",margin:"20px 5px"}}/></div> 
        </div> 
          </div> 
          <hr/>
          <div style={{height:"50px",margin:"20px 20px 0 20px",
            display:"flex",justifyContent:"space-around",alignItems:"center"
          }}>
            <div style={{display:"flex",alignItems:"center"}}>
            <FaRegHeart  style={{color:"#855c72",fontSize:"25px",margin:"20px 5px"}}/>
            <p>J'adore</p>
            </div>

            <div style={{display:"flex",alignItems:"center"}}>
            <FiMessageCircle  style={{color:"#855c72",fontSize:"25px",margin:"20px 5px"}}/>
            <p>Commenter</p>
            </div>

            <div style={{display:"flex",alignItems:"center"}}>
            <IoIosShareAlt   style={{color:"#855c72",fontSize:"25px",margin:"20px 5px"}}/>
            <p>Partager</p>
            </div>
          </div>
         
         
        </div>
        </div>
    
  )
}

export default Blog