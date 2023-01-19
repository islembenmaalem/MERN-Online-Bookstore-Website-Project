import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AfficheBooks() {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const baseURL ="http://localhost:3006/books"
  const url ='http://localhost:3002/users'
    useEffect(() => {
            
            
         axios.get(baseURL).then(res => {
            console.log("res data",res.data)
            setBooks(res.data)
        }).catch(err=>console.log(err))
        console.log("book : " ,books)


        axios.get(url).then(res => {
          console.log("res data",res.data)
          setUsers(res.data)
      }).catch(err=>console.log(err))
      console.log("user : " ,users)



       
      }

      
      
      
      
      
      , [])

      const deleteBook = async (id) => {
        // Simple DELETE request with axios
        console.log(typeof(id))
        console.log("here into delet team ",id)
        axios.get(baseURL).then(res => {
          console.log("res data",res.data)
          setBooks(res.data)
      }).catch(err=>console.log(err))
        
        axios.delete('http://localhost:3006/books/'+id).catch(err=>console.log("erreuerrrr   ",err))
        axios.get(baseURL).then(res => {
          //console.log("res data",res.data)
          setBooks(res.data)
      }).catch(err=>console.log(err))
        

    }
  const deleteUser = async (id) => {
      // Simple DELETE request with axios
      console.log(typeof(id))
      console.log("here into delet team ",id)
      axios.get(baseURL).then(res => {
        console.log("res data",res.data)
        setUsers(res.data)
    }).catch(err=>console.log(err))
      
      axios.delete('http://localhost:3002/users/'+id).catch(err=>console.log("erreuerrrr   ",err))
      axios.get(baseURL).then(res => {
        //console.log("res data",res.data)
        setUsers(res.data)
    }).catch(err=>console.log(err))
      

  }
let s=0
 function addOne(){
     s+=1
     return s
 }
 let u=0
 function addOneu(){
     u+=1
     return u
 }

 const navigate=useNavigate()
 const navigateTo=()=>{
  navigate('/AddBook/')
}    
 //<div style={{margin:50}}><br/><button style={{marginLeft:50,marginBottom:15}} className="btn btn-primary">Add</button>  
 const navigateToedit=(id)=>{
  navigate('/edit/'+id)
}
const navigateToAddUser=()=>{
  navigate('/AddUser/')
}
const navigateToeditUser=(id)=>{
  navigate('/editUser/'+id)
}
  return (
<div>
<nav>
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Books</button>
      <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-a" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Users</button>
    </div>
  </nav>
  <div className="tab-content" id="nav-tabContent">
    <div className="tab-pane fade show active" id="nav-a" role="tabpanel" aria-labelledby="nav-home-tab">
    <div style={{margin:50}}><br/><button style={{marginLeft:50,marginBottom:15}} className="btn btn-primary" onClick={()=>navigateToAddUser()}>Add</button>  

<table className="table table-hover">
<thead>
<tr>
<th scope="col">id</th>

      <th scope="col">nom</th>
      <th scope="col">prenom</th>
      <th scope="col">email</th>
      <th scope="col">mot de passe</th>
      
      <th scope="col">Actions</th>
      <th scope="col"></th>
</tr>
</thead>
<tbody>

{users.map((c, key) => (
         
         <tr key={c._id}>
            <td scope="row">{addOneu()}</td>
             <td>{c.UNom}</td>
             <td>{c.Uprenom}</td>
             <td>{c.Uemail}</td>
             <td>{c.Umdp}</td>
             

             <td><button className="btn btn-outline-danger" onClick={()=>deleteUser(c._id)}>delete</button></td>
             <td><button className="btn btn-outline-info" onClick={()=>navigateToeditUser(c._id)}> edit</button></td>
             </tr>))}
             
</tbody>
</table>
</div>
    

    </div>
    
    <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-contact-tab">
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
             

             <td><button className="btn btn-outline-danger" onClick={()=>deleteBook(c._id)}>delete</button></td>
             <td><button className="btn btn-outline-info" onClick={()=>navigateToedit(c._id)}> edit</button></td>
             </tr>))}
             
</tbody>
</table>
</div> 
    </div>
  
  </div>
    
    </div>
  )
}
