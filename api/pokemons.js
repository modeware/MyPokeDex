
// const fetch=require('isomorphic-fetch')



 const fetchPokemons=async (num) => { //fetch Pokemons from the api
    try{
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${num}`)
    const result=await response.json()
    const pokemons= result.results
    return pokemons
  }
    catch (err){
        return ([])
    }
}

let processPokemons=  (pokemon)=>{    //process the object to a more readable form and get the required values into an object
    const {name,types,weight,sprites}=pokemon
    const type=types.map(processTypes)
    const imageUrl=sprites.front_default
    const myPokemons=Object.assign({},{name},{type},{weight},{imageUrl})
    return myPokemons
}

processTypes=(type)=>(type.type.name)

 const pokemons= async (num)=>{   
     try{
    const allPokemons=await fetchPokemons(num)
    const pokemonArray=await Promise.all(allPokemons.map(poke=>
        fetch(poke.url).then(resp=>resp.json()).then(result=>processPokemons(result)))
        )

    return pokemonArray
     }

     catch(err){
         return([])
     }
}

 export const myPokemons=async (num)=>{
    try{
    const thePokemons=await pokemons(num)
    return thePokemons
    }
    catch(err){
        return([])
    }
}

