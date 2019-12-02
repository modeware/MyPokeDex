import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import {getMyPokemonsList} from '../redux/actions'
import {connect} from 'react-redux'
import {Pokemons} from '../Pokemons'
import {fetchOnePokemonDetail} from '../api/searchPokemons'


class SearchScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:"",
            filteredPokemons:[]
        }
    }

    static navigationOptions=()=>({
        headerTitle:'Search Pokemons',
        headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        

      })
      
     getPokemonDetail= async (pokemon) =>{
          let details= await fetchOnePokemonDetail(pokemon)
          this.props.navigation.navigate('PokemonDetails',{
            name:details.name,
            weight:details.weight,
            type:details.type,
            urlImage:details.imageUrl
        })
     }   

     getSomePokemons=()=>{

      someText=this.state.text
       if(someText===""){
        this.setState({
          filteredPokemons:[]
        })
       }
       else{
      onePokemon=someText
      let filteredPokemons=this.props.pokeList.filter(pokemon=>pokemon.name.toLowerCase().includes(onePokemon.toLowerCase()))
      this.setState({
        filteredPokemons:filteredPokemons
      })
    }
     }
      inputTextHandler=(text)=>{
        this.setState({
            text:text.nativeEvent.text
        },()=>this.getSomePokemons())
        //  console.log(text.nativeEvent.text)
          // let typedText=this.state.text
          // if(typedText.length===2||typedText.length%1===0){
          //     this.getSomePokemons(typedText.toString())
          // }

    }
    render(){   
        // onePokemon=this.state.text
        // filteredPokemons=onePokemon
        // let filteredPokemons=this.props.pokeList.filter(pokemon=>pokemon.name.toLowerCase().includes(onePokemon.toLowerCase()))
        return (
        
          <View style={{...styles.container,backgroundColor: this.props.darkMode,
          }}>
                    
                    <TextInput placeholder={"Search Pokemons"}  onChange={this.inputTextHandler} style={{fontSize:25, fontWeight:'bold',height: 70, borderColor: 'red', borderWidth: 2,padding:8,color:"#32a8a8"}} />
                    <Pokemons getPokemonDetail={this.getPokemonDetail} pokemons={this.state.filteredPokemons}/>
            </View>)
            }
   
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  

  mapStateToProps=state=>
  {
    return  ({
                pokeList:state.pokemonList,
                darkMode:state.darkMode[0].mode,
                lightMode:state.lightMode[0].mode
             })
}

export default connect(mapStateToProps,{getMyPokemonsList})(SearchScreen)