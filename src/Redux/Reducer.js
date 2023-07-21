import { ADD_FAV,REMOVE_FAV } from "./Actions";

const initialState={
    myFavorites:[],
}

const rootReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites,action.payload]
            };
        
        case REMOVE_FAV:
            const num=Number(action.payload);
            return{
                ...state,
                myFavorites: state.myFavorites.filter((e)=>e.id !==num)
            };
        default:
            return{...state};
    }
}

export default rootReducer;