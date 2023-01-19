import { useState,useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
    const [books, setBooks] = useState([]);
    const [mdp,setmdp]= useState("");
    const [email,setemail]= useState("");
	const [data, setData] = useState({
		Uemail: email,
		Umdp: mdp,
	});
    const [error, setError] = useState("");

	const navigate = useNavigate();

    useEffect(() => { 
     
        axios.get('http://localhost:3002/users/').then(res => {
         //  console.log("res data",res.data)
  
           setBooks(res.data)
       }).catch(err=>console.log(err))
     //  console.log("book : " ,books)
  
}                       
, [])


const handClick = (event) =>{


    let data={
    Uemail: email,
    Umdp: mdp
                }
    
let exist =false;
for (let i = 0; i < books.length; i++) {
    if ((books[i].Uemail==email)&&(books[i].Umdp==mdp)){
      //  console.log("mail")
        //alert("email wrong try again")
        exist=true;
        navigate('/')
                  }
    if (exist==true){
        break;
    }
    if ((books[i].Uemail==email)&&(books[i].Umdp!=mdp)){
        alert("wrong password")
    }
    if ((books[i].Uemail!=email)&&(books[i].Umdp==mdp)){
        alert("email wrong")
    }

}


}



    const changeEmail = (event) =>{
        setemail(event.target.value)
    };    
    const changeMdp= (event) =>{
        setmdp(event.target.value)
    };   

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h1>Login to Your Account</h1>
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
						<button type="button" className={styles.btn} onClick={handClick}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
