import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';

export default function ComfimAdmin() {
    const navigate=useNavigate()

    const handClick = () =>{
        let pwd = prompt("Please the password:", "*****");
    
        if (pwd == "pwd" || pwd == "a") {
            navigate('/admin/')
    }
    else{
        alert("mot de passe incorrecte");
        let pwd = prompt("Please the password:", "*****");
    }
      }
  return (
    <div>
        <button className=" read_more quote_btn" id="connect"  onClick={handClick}>Connect</button>
    </div>
  )
}
