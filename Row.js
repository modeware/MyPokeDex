import React from 'react'
import {TouchableOpacity, Text,StyleSheet} from 'react-native'
import Constants from 'expo-constants';



export const Row=(props)=>{
    return(
        <TouchableOpacity style={styles.item} onPress={()=>props.getPokemonDetail(props.pokemon.name)} >
        <Text pokeID={props.name} style={styles.title}>{props.pokemon.name.toUpperCase()}</Text>
      </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor:"red",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      color:"white"
    },
  });

// function Row({ title }) {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//       </View>
//     );
//   }