import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Details(){

    const {id} = useParams();
    const [character,setCharacter] = useState({});
    const location = useLocation();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        console.log(location)
        return setCharacter({});
     }, [id]);

    return(
        <div>
            {character.name&&<h1>{character.name}</h1>}
            {character.status && <h1>{character.status}</h1>}
            {character.species&&<h1>{character.species}</h1>}
            {character.gender&&<h1>{character.gender}</h1>}
            {character.origin&&<h3>{character.origin.name}</h3>}
            {character.image&&<img src={character.image} alt={character.image}></img>}
        </div>
    )
}