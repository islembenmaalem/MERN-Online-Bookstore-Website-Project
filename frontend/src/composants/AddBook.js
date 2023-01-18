import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from "axios";

export default function AddBook() {
  const [books, setBooks] = useState([]);
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
    const baseURL ="http://localhost:3006/books"

    useEffect(() => { 
     
      axios.get(baseURL).then(res => {
       //  console.log("res data",res.data)

         setBooks(res.data)
     }).catch(err=>console.log(err))
   //  console.log("book : " ,books)

   for (let i = 0; i < books.length; i++) {
    if (books[i]._id==params.id){
    setBgenre(books[i].Bgenre)
     setBNom(books[i].BNom)
     setBauteur(books[i].Bauteur)
     setBDate(books[i].BDate)
     setBpays(books[i].Bpays)
     setBprix(books[i].Bprix)
     setBlangue(books[i].Blangue)
    // console.log(books)

    }
   }
   }                       
   , [])

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
      const handClick = (event) =>{
        setBpays(event.target.value)

        if(params.id){
           let data={
            Blangue:Blangue,
            Bgenre:Bgenre,
             _id:params.id,
            BNom :BNom,
            BDate: BDate,
            Bprix:parseInt(Bprix),
            Bpays:Bpays,
             Bauteur:Bauteur,
            
                    }
           
          axios.put('http://localhost:3006/books/'+params.id, data)
          .then(response => this.setState({ updatedAt: response.data.updatedAt }));



           axios.get(baseURL).then(res => {
            setBooks(res.data)
        }).catch(err=>console.log(err))
         

                navigate('/admin/')
    
       
                
                                       
        }
    else{
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
    }
                

        
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
              <input type="text" className="form-control" placeholder="Nom" value={BNom} onChange={(e)=>setBNom(e.target.value)}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Date" value={BDate} onChange={changeBDate}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="prix"value={Bprix} onChange={changeBprix}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="pays"value={Bpays} onChange={changeBpays}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="auteur"value={Bauteur} onChange={changeBauteur}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="langue"value={Blangue} onChange={changeBlangue}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="genre"value={Bgenre} onChange={changeBgenre}/>
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
