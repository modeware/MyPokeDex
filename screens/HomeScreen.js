import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList,TextInput} from 'react-native'
import {Pokemon} from '../pokemonCard'
import {getMyPokemons,getMyPokemonsList} from '../redux/actions'
import {connect} from 'react-redux'
import store from '../redux/store'

class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:0,
        }
    
    }
    static navigationOptions=()=>(
        {
        headerTitle:'MY POKEDEX',
        headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          
           



         }
         
         
         )
goToDetails=(pokemon)=>{
    this.props.navigation.navigate('PokemonDetails',{
        name:pokemon.name,
        weight:pokemon.weight,
        type:pokemon.type,
        urlImage:pokemon.urlImage
    })
}

componentDidMount(){
    this.props.getMyPokemons(this.state.num.toString())
    this.props.getMyPokemonsList()

}

toggleView=()=>{
    this.props.navigation.navigate('SearchScreen')
}

handleLoadMore=()=>{
    this.setState(
        (prevState,nextProps)=>({
        num:prevState.num+12
    }),
    ()=>{
        this.props.getMyPokemons(this.state.num.toString())
    }
    
    )

}
// const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))


inputTextHandler=(text)=>{
    this.setState({
        text:text
    })

}

renderItem=({item}) =><Pokemon  goToDetails={this.goToDetails} name={item.name} urlImage={item.imageUrl} type={item.type} weight={item.weight}/>

    render(){ 
        
  
   return (           <View style={{backgroundColor:this.props.darkMode}}>
            <TextInput placeholder={"Search Pokemons"} onFocus={this.toggleView}  style={{fontSize:25, fontWeight:'bold', height: 70, borderColor: 'red', borderWidth: 2,padding:8}} />

            <FlatList style={{margin:5}}
            data={this.props.pokemons}
            numColumns={3}
            keyExtractor={(item, index) => item.name }
            renderItem={this.renderItem}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.5}
            initialNumToRender={12}
          />
          </View>
)
            }
        
            
   
}


  mapStateToProps=state=>
  {
    return  ({
                pokemons:state.pokemon,
                pokeList:state.pokemonList,
                darkMode:state.darkMode[0].mode,
                lightMode:state.lightMode[0].mode
             })
}

export default connect(mapStateToProps,{getMyPokemons,getMyPokemonsList})(HomeScreen)