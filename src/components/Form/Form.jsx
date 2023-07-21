import { useState } from "react"
import validation from "../../Functions/ValidationForm";
import style from "./Form.module.css";
import meteoro from "./../../img/images.jpg";
import nave from "./../../img/nuevaNave.jpg"
import logo from "./../../img/caras_RyM.jpg"

export default function Form(props){

    const [userData,setUserData] = useState({
        username:"",
        password:"",
    })

    const [error,setError] = useState({});


    const handleChange= (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setUserData({
            ...userData,
            [name]:value,
        })
        setError(validation({
            ...userData,
            [name]:value,
        }));
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        props.login(userData);
    }

    return(
        <div className={style.wrapper}>
            <div>
                <img src={logo} alt="logo" className={style.logo}/>
            </div>
            <div className={style.formWrapper}>

                <form onSubmit={handleSubmit} className={style.form}>
                    <label>EMAIL</label>
                    <br/>
                    <input 
                    type="text" 
                    placeholder="ingrese su email"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}/>
                    <br/>
                    {error.username&&<span style={{color:"rgb(180, 11, 11)"}}>{error.username}</span>}
                    <br/>

                    <label>PASSWORD</label>
                    <br/>
                    <input 
                    type="password" 
                    placeholder="ingrese su contraseña"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}/>
                    <br/>
                    {error.password&&<span style={{color:"rgb(180, 11, 11)"}}>{error.password}</span>}
                    <br/>
                    <button type="submit">Submit</button>
                </form> 
            </div>
            <div className={style.meteoro}>
                <img src={meteoro} alt="meteorito" className={style.imagenMeteoro}/>
            </div>
            <div className={style.nave}>
                <img src={nave} alt="nave" className={style.imagenNave}/>
            </div>
        </div>
    )
}