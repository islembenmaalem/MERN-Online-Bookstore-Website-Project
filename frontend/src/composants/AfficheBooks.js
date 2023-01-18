import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AfficheBooks() {
    const [books, setBooks] = useState([]);
    const baseURL ="http://localhost:3006/books"
    useEffect(() => {
            
            
         axios.get(baseURL).then(res => {
            console.log("res data",res.data)
            setBooks(res.data)
        }).catch(err=>console.log(err))
        console.log("book : " ,books)




       
      }

      
      
      
      
      
      , [])

      const deletec = async (id) => {
        // Simple DELETE request with axios
        console.log(typeof(id))
        console.log("here into delet team ",id)
        axios.get(baseURL).then(res => {
          console.log("res data",res.data)
          setBooks(res.data)
      }).catch(err=>console.log(err))
        
        axios.delete('http://localhost:3006/books/'+id).catch(err=>console.log("erreuerrrr   ",err))
        axios.get(baseURL).then(res => {
          console.log("res data",res.data)
          setBooks(res.data)
      }).catch(err=>console.log(err))
        

    }
let s=0
 function addOne(){
     s+=1
     return s
 }

 const navigate=useNavigate()
 const navigateTo=()=>{
  navigate('/AddBook/')
}    
 //<div style={{margin:50}}><br/><button style={{marginLeft:50,marginBottom:15}} className="btn btn-primary">Add</button>  
 const navigateToedit=(id)=>{
  navigate('/edit/'+id)
}
  return (

<div style={{margin:50}}><br/><button style={{marginLeft:50,marginBottom:15}} className="btn btn-primary" onClick={()=>navigateTo()}>Add</button>  

              <table className="table table-hover">
  <thead>
    <tr>
    <th scope="col">id</th>
    
                    <th scope="col">nom du livre</th>
                    <th scope="col">date de realisation</th>
                    <th scope="col">nom de lauteur</th>
                    <th scope="col">langue</th>
                    <th scope="col">prix</th>
                    <th scope="col">genre</th>
                    <th scope="col">Pays</th>
                    <th scope="col">Actions</th>
                    <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
     
    {books.map((c, key) => (
                       
                       <tr key={c._id}>
                          <td scope="row">{addOne()}</td>
                           <td>{c.BNom}</td>
                           <td>{c.BDate}</td>
                           <td>{c.Bauteur}</td>
                           <td>{c.Blangue}</td>
                           <td>{c.Bprix}</td>
                           <td>{c.Bgenre}</td>
                           <td>{c.Bpays}</td>

                           <td><button className="btn btn-outline-danger" onClick={()=>deletec(c._id)}>delete</button></td>
                           <td><button className="btn btn-outline-info" onClick={()=>navigateToedit(c._id)}> edit</button></td>
                           </tr>))}
                           
  </tbody>
</table>
        
    </div>
  )
}
