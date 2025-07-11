import React from "react";

function Header({name= "Underrreacted"}){
 return (
  <div className="header">
   <h1>{name}</h1>
  </div>
 )
}


export default Header;