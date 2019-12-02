
const fetch=require('isomorphic-fetch')



const fetchPokemons=async () => { //fetch Pokemons from the api
    try{
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1000`)
    const result=await response.json()
    const pokemons= result.results.map(processPokemons)
    return pokemons
  }
    catch (err){
        return ([])
    }
}


const fetchOnePokemonDetail=async (pokemonName) => { //fetch Pokemons from the api
    try{
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const result=await response.json()
    const pokemons= processtheDetailOfOnePokemon(result)
    return pokemons
  }
    catch (err){
        return ([])
    }
}
processtheDetailOfOnePokemon=  (pokemon)=>{    //process the object to a more readable form and get the required values into an object
    const {name,types,weight,sprites}=pokemon
    const type=types.map(processTypes)
    const imageUrl=sprites.front_default
    const myPokemons=Object.assign({},{name},{type},{weight},{imageUrl})
    return myPokemons
}

processPokemons=  (pokemon)=>{    //process the object to a more readable form and get the required values into an object
    const {name}=pokemon
    const myPokemons=Object.assign({},{name})
    return myPokemons
}

processTypes=(type)=>(type.type.name)

 
 export const myPokemons=async ()=>{
    try{
    const thePokemons=await fetchPokemons()
    console.log(thePokemons)
    return thePokemons
}
    catch(err){
        return([])
    }
}
//  const getSomeDetails=async ()=>{
//         let pokes= await  myPokemons()
//         let details=await fetchOnePokemonDetail(pokes[0].name)
//         return details
//     }

// getSomeDetails()