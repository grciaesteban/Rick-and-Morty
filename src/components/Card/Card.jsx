import { NavLink, useLocation } from "react-router-dom";
import style from "./Card.module.css";
import { addFav,removeFav } from "../../Redux/Actions";
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";


export default function Card(props) {

   const location = useLocation();
   
   const dispatch = useDispatch(); 
   const characters = useSelector((state)=>state.myFavorites)
                                                

   const [isFav,setIsFav] = useState(false);
   
   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(props.id));
      };
      if(!isFav){
         setIsFav(true);
         dispatch(addFav(props));
      };
   };

   useEffect(() => {
      characters.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [characters]);

   console.log(characters)

   const {onClose} = props;
   
   return (
      <div className={style.card} key={props.id}>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
         {location.pathname!=="/favorites"&& <button onClick={()=>{onClose(props.id)}}>X</button>}
         <NavLink to={`/details/${props.id}`}>
            <h2>{props.name}</h2>
         </NavLink>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin&&props.origin.name}</h2>
         <div className={style.card__img}>
            <img src={props.image} alt={props.image}/>
         </div>
      </div>
   );
}

// props{} --- card
// onclose={props.onClose}
// id={c.id} 
// key={c.id}
// name={c.name}
// status={c.status}
// species={c.species}
// gender={c.gender}
// origin={c.origin.name}
// image={c.image}/>