import React from 'react'
import {View,Text,StyleSheet,Picker,Button,Switch} from 'react-native'
import {connect} from 'react-redux'
import {toggleDarkMode,toggleLightMode} from '../redux/actions'

class SettingsScreen extends React.Component{
    constructor(props){
      super(props)
      this.state={
        toggle:false
      }
    }

        static navigationOptions=()=>({
          headerTitle:'Settings',
          headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          
  
        }
        
        )


  toggle=()=>{
    this.setState({
      toggle:!this.state.toggle
    })
    if(this.props.darkMode==="white")
      { this.props.toggleDarkMode({mode:"black",font:"white"}) }
    else{
      this.props.toggleDarkMode({mode:"white",font:"black"}) 
    }

  }

    render(){   
      // console.log(this.props.darkMode)

        return (
        
            <View style={{...styles.container,backgroundColor: this.props.darkMode,
            }}>
                    
                    <View style={{ width:"100%",marginTop: 10 ,backgroundColor:"red",alignItems:"center",padding:20}}>
                           <Text style={{color:"white",fontSize:40,fontWeight:'bold'}}>Toggle Theme</Text>
                    </View>
                  <Switch 
                     style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],marginTop:10}}
                     value={this.state.toggle}
                     onValueChange={this.toggle} 
                     trackColor={{true: 'blue', false: 'black'}}/>



            </View>)
            }
   
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:50,
      alignContent:"center",
      alignItems:"center"
 
    },
  });
  

  mapStateToProps=state=>
  {
    return  ({

                darkMode:state.darkMode[0].mode,
                lightMode:state.lightMode[0].mode
             })
}

export default connect(mapStateToProps,{toggleDarkMode,toggleLightMode})(SettingsScreen)