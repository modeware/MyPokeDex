import React from 'react'
import {View,Text,StyleSheet,ImageBackground,Image} from 'react-native'
import {connect} from 'react-redux'

class PokemonDetailsScreen extends React.Component{
        constructor(props){
          super(props)
          this.state={
            mode:this.props.darkMode
          }
        }
        static navigationOptions=()=>({
          headerTitle:'Details',
          headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          
  
        })
    render(){   
          return(
            <View style={{flex:1,backgroundColor:this.props.darkMode}}>
            {/* <ImageBackground source={{uri:this.props.navigation.getParam('urlImage')}} style={{width: 400, height: 400}}> */}
            <Text style={{fontWeight:"bold", fontSize:30,padding:10,color:this.props.font}}>
                {this.props.navigation.getParam('name').toUpperCase()}  
            </Text>
            <Text style={{fontWeight:"bold", fontSize:15,padding:20,color:this.props.font}}>
               {"weight : "}  {this.props.navigation.getParam('weight')}  
            </Text>
  
            <Text style={{fontWeight:"bold", fontSize:15,padding:20,color:this.props.font}}>
               {"type : "}  {this.props.navigation.getParam('type')}  
            </Text>
            <Image
            style={{padding:200,width:100, height: 100}}
            source={{uri: this.props.navigation.getParam('urlImage')}}
          />
         {/* </ImageBackground> */}
      
  
        </View>
          )
        }
    
            }
   


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

  
  mapStateToProps=state=>
  {
    return  ({

                darkMode:state.darkMode[0].mode,
                font:state.darkMode[0].font
             })
}

export default connect(mapStateToProps)(PokemonDetailsScreen)