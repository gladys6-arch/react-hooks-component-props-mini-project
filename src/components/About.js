import React from "react";


function About({ image="logo",about="A blog about learnig React"}){
  

  return(
    
    <aside>
      <img src={image}/>
      <p>{about}</p>
    </aside>
  )

}


export default About;