import './App.css';
import {useState, useEffect} from "react";
import { useLocation,useNavigate,Route,Routes } from 'react-router-dom';
import axios from 'axios';
import { removeFav } from './Redux/Actions';
import {useDispatch } from 'react-redux';
import Cards from './components/Cards/Cards';
import Nav from './components/NavBar/Nav';
import About from "./components/About/About";
import Details from "./components/Details/Details";
import Form from "./components/Form/Form";
import Favorites from './components/Favorites/Favorites';


function App() {
   
   const location = useLocation();
   const navigation = useNavigate();

   const [characters,setCharacters] = useState([]);
   const [access,setAccess] = useState(false);

   const EMAIL = "estebanezegarcia@gmail.com";
   const PASSWORD = "esteban1";
   //-------------------login function-------------------------------//
   function login(userData){
      if(EMAIL === userData.username && PASSWORD === userData.password){
         setAccess(true);
         navigation("/home")
      };
   };

//---------------logout function----------------//
   function logout(){
      setAccess(false);
      navigation("/")
   }

//----------------access permission -----------------//
   useEffect(() => {
   !access && navigation('/');
   }, [access]);

   
//-------------------random function-----------------------//

   function randomHandler(){
      let haveIt = [];

      let random = (Math.random()*826).toFixed();

      random=Number(random);

      if(!haveIt.includes(random)){
         haveIt.push(random);

         fetch(`https://rickandmortyapi.com/api/character/${random}`)
         .then((response)=> response.json())
         .then((data)=>{
            if(data.name){
               console.log(location)
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

//seacrh function-----------------------------------//
   function searchHandler(id) {
     
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find(e=>e.id===data.id)
            if(exist){
               alert("ya se encuentra agregado")
            }else{

               setCharacters((oldChars) => [...oldChars, data]);
            }
                  
            }else {
            window.alert('¡No hay personajes con este ID!');
            
         }
      });
   }

//---------------------close button function ---------------------//
   const dispatch = useDispatch()
   const closeHandler=(id)=>{
      const num = parseInt(id,10)
      const list = characters.filter((e)=>e.id!==num)
      setCharacters(list)
      dispatch(removeFav(id));
   }


   return (
      <div className='App'>
         {location.pathname!=="/"&&<Nav onSearch={searchHandler} random={randomHandler} logout={logout}/>}
         
         <Routes>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={closeHandler} />}/>
            <Route path='/' element={<Form login={login}/>}/>
         </Routes>
         
      </div>
   );
}

export default App;

