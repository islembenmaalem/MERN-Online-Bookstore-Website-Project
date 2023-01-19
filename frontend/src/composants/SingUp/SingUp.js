import { useState,useEffect } from "react";
import axios from "axios";
import {  useParams,Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
    const [users, setUsers] = useState([]);
    const [mdp,setmdp]= useState("");
    const [email,setemail]= useState("");
    const [title,setTitle]= useState("");
    const [prenom,setprenom]= useState("");
    const [nom,setNom]= useState("");
    const params=useParams(); //yekho parametre mel fou9
    useEffect(()=>{
        if (params.id) {
          setTitle("edit")
        } else {
          setTitle("Sing Up");
        }
       
      },[])
	const [data, setData] = useState({
		UNom: nom,
		Uprenom: prenom,
		Uemail: email,
		Umdp: mdp,
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	
    useEffect(() => { 
     
        axios.get('http://localhost:3002/users/').then(res => {
         //  console.log("res data",res.data)
  
           setUsers(res.data)
       }).catch(err=>console.log(err))
     //  console.log("book : " ,books)
  
}                       
, [])
const handClickA = (event) =>{

    if(params.id){
       let data={
        UNom: nom,
		Uprenom: prenom,
		Uemail: email,
		Umdp: mdp,
        
                }
       
      axios.put('http://localhost:3002/users/'+params.id, data)
      .then(response => this.setState({ updatedAt: response.data.updatedAt }));



       axios.get('http://localhost:3002/users/').then(res => {
        setUsers(res.data)
    }).catch(err=>console.log(err))
     

            navigate('/admin/')

   
            
                                   
    }
else{
  

    let data={
        UNom: nom,
    Uprenom: prenom,
    Uemail: email,
    Umdp: mdp
                }
    
let exist =false;
for (let i = 0; i < users.length; i++) {
    if (users[i].Uemail==email){
        console.log("mail")
        alert("email used try again")
        navigate("/Signup/")
        exist=true;
                  }
    if (exist==true){
        break;
    }
}
if (exist==false){
    axios.post('http://localhost:3002/users/', data)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
    
    navigate('/login/')
    
}

}
            

    
        };
    const handClick = (event) =>{


        let data={
            UNom: nom,
		Uprenom: prenom,
		Uemail: email,
		Umdp: mdp
                    }
        
    let exist =false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].Uemail==email){
            console.log("mail")
            alert("email used try again")
            navigate("/Signup/")
            exist=true;
                      }
        if (exist==true){
            break;
        }
    }
    if (exist==false){
        axios.post('http://localhost:3002/users/', data)
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
        
        navigate('/login/')
        
    }
    
    }
    const changeNom = (event) =>{
        setNom(event.target.value)
    };
    const changePrenom = (event) =>{
        setprenom(event.target.value)
    };
    const changeEmail = (event) =>{
        setemail(event.target.value)
    };    
    const changeMdp= (event) =>{
        setmdp(event.target.value)
    };   
	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} >
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={changeNom}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={changePrenom}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={changeEmail}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={changeMdp}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="button" className={styles.btn} onClick={handClickA}>
							{title}
						</button>

					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;