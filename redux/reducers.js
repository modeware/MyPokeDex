import {combineReducers} from 'redux'
import {NO_POKEMON_LIST,POKEMONS_LIST,NO_POKEMONS,UPDATE_POKEMONS,DARK_MODE,LIGHT_MODE} from './actions'

const merge =(prev,next)=>([...prev,...next])

const pokemonReducer=(state=[],action)=>{
    switch(action.type){
        case UPDATE_POKEMONS:
            return (merge(state,action.payload))
        case NO_POKEMONS:
            return (merge(state,{someError:action.payload}))
        default:
            return state
    }
}

const pokemonListReducer=(state=[],action)=>{
    switch(action.type){
        case POKEMONS_LIST:
            return (merge(state,action.payload))
        case NO_POKEMON_LIST:
            return (merge(state,{someError:action.payload}))
        default:
            return state
    }
}


const darkModeReducer=(state=[],action)=>{
    if(action.type===DARK_MODE){
        return [action.payload]
        }
        return state
  
}

const lightModeReducer=(state=[],action)=>{
    if(action.type===LIGHT_MODE){
        return [...state,action.payload]
        }
        return state
  
}

const reducer=combineReducers({
    pokemon:pokemonReducer,
    pokemonList:pokemonListReducer,
    darkMode:darkModeReducer,
    lightMode:lightModeReducer
})

export default reducer