import Card from "../Card/Card"
import { useState } from "react";
import styles from "./SearchBar.module.css"


export default function SearchBar(props) {

   const [id,setId] = useState("");

   const handleChange = (e)=>{
      setId(e.target.value)
     
   }
   
   return (
      <div className={styles.searchBar}>
            <input type='search' className={styles.input} placeholder="coloque el ID" value={id} onChange={handleChange}/>
            <button onClick={()=>props.onSearch(id)} className={styles.button}>Agregar</button>
      </div>
   );
}

// props
// onSearch= function