export default function randomHandler(setCharacters, characters){
    let haveIt = [];

    let random = (Math.random()*826).toFixed();

    random=Number(random);

    if(!haveIt.includes(random)){
       haveIt.push(random);

       fetch(`https://rickandmortyapi.com/api/character/${random}`)
       .then((response)=> response.json())
       .then((data)=>{
          if(data.name){
             
             setCharacters((oldChars)=>[...oldChars, data]);
          }else{
             window.alert("No hay personajes con este ID")
          }
       });
    }else{
       console.log("Ya agregaste todos los personajes");
       return false;
    };
 };

 