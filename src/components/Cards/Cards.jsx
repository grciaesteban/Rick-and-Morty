import Card from "../Card/Card";
import style from "./Card.module.css"

export default function Cards(props) {
   const {onClose,characters} = props;
   
  
   return <div className={style.card}>
      {characters.map(c=>(

         <Card
         onClose={onClose}
         id={c.id} 
         key={c.id}
         name={c.name}
         status={c.status}
         species={c.species}
         gender={c.gender}
         origin={c.origin.name}
         image={c.image}/>
      ))}
   </div>;
}

// props{}
// characters: arreglo de objetos
// onClose: funcion

