import {myPokemons} from '../api/pokemons'
import {getPokemonList} from '../api/searchPokemons'

export const UPDATE_POKEMONS='UPDATE_POKEMONS'
export const NO_POKEMONS='NO_POKEMONS'
export const POKEMONS_LIST='POKEMONS_LIST'
export const NO_POKEMON_LIST='NO_POKEMON_LIST'
export const DARK_MODE="DARK_MODE"
export const LIGHT_MODE="LIGHT_MODE"



export const getMyPokemons=(num)=>dispatch=>{
    myPokemons(num).then((result)=>{
        dispatch({type:'UPDATE_POKEMONS',payload:result})
    }).catch(err=>{
        dispatch({type:'NO_POKEMONS',payload:err.message})
    })
}


export const getMyPokemonsList=()=>dispatch=>{
    getPokemonList().then((result)=>{
        dispatch({type:'POKEMONS_LIST',payload:result})
    }).catch(err=>{
        dispatch({type:'NO_POKEMON_LIST',payload:err.message})
    })
}

export const toggleDarkMode=(mode)=>{
    return ({type:'DARK_MODE',payload:mode})
}


export const toggleLightMode=(mode)=>{
    return ({type:'LIGHT_MODE',payload:mode})
}
