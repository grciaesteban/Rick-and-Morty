import style from "./Favorites.module.css";
import { useSelector } from "react-redux";
import Card from "../Card/Card";


const Favorites = ()=>{

    const characters = useSelector((state)=>state.myFavorites);
  

    return(
        <div className={style.favorites}>
            {characters.map((c)=>(
                <Card
                id={c.id} 
                key={c.id}
                name={c.name}
                status={c.status}
                species={c.species}
                gender={c.gender}
                origin={c.origin.name}
                image={c.image}/>
            ))};
        </div>
    )
}

export default Favorites;