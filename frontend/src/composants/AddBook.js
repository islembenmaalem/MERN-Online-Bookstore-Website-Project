import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from "axios";

export default function AddBook() {
    const [Bprix,setBprix]= useState("");
    const [BDate,setBDate]= useState("");
    const [BNom,setBNom]= useState("");
    const [Bauteur,setBauteur]= useState("");    
    const [Blangue,setBlangue]= useState("");
    const [Bpays,setBpays]= useState("");
    const [Bgenre,setBgenre]= useState("");
  //  const [count,setCount]= useState(0);
    const [title,setTitle]= useState("");
    const params=useParams(); //yekho parametre mel fou9
    const navigate=useNavigate()
    
    useEffect(()=>{
        if (params.id) {
          setTitle("edit")
        
        } else {
          setTitle("add");
          
        }
      },[])
      const navigateTo=()=>{
       navigate('/admin/')
     }  
      const handClick = () =>{
    
                  let data={
                    BNom :BNom,
                    BDate: BDate,
                    Bprix:parseInt(Bprix),
                    Bpays:Bpays,
                     Bauteur:Bauteur,
                    Blangue:Blangue,
                    Bgenre:Bgenre
                            }
                
        axios.post('http://localhost:3006/books/', data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        navigate('/admin/')

        
            };
    const changeBNom = (event) =>{
        setBNom(event.target.value)
    };
    const changeBauteur = (event) =>{
        setBauteur(event.target.value)
    };
    const changeBprix = (event) =>{
        setBprix(event.target.value)
    };    
    const changeBDate = (event) =>{
        setBDate(event.target.value)
    };    
    const changeBlangue = (event) =>{
        setBlangue(event.target.value)
    };    
    const changeBpays = (event) =>{
        setBpays(event.target.value)
    };
    const changeBgenre = (event) =>{
        setBgenre(event.target.value)
    };

  return (
<div className="site-section">
  <br />
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <form action="#">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="BNom" value={BNom} onChange={(e)=>setBNom(e.target.value)}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="BDate" value={BDate} onChange={changeBDate}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Bprix"value={Bprix} onChange={changeBprix}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Bpays"value={Bpays} onChange={changeBpays}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Bauteur"value={Bauteur} onChange={changeBauteur}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Blangue"value={Blangue} onChange={changeBlangue}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Bgenre"value={Bgenre} onChange={changeBgenre}/>
            </div>
            
            <div className="form-group">
                <button className="btn btn-primary py-3 px-5"  type="button" onClick={handClick}>{title} book</button>
            </div>

          </form>  
        </div>
       
      </div>
    </div>
  </div>
  )
}
