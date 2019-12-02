import React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'

export const Pokemon=(props)=>{
    return(
        <TouchableOpacity onPress={()=>props.goToDetails(props)} style={{flex:1/3, margin: 5, backgroundColor: 'white', height: 130,alignItems:"center"}} >
                <Image
          style={{width:100, height: 100}}
          source={{uri: props.urlImage}}
        />
                    <Text style={{textAlign:'center',fontWeight:"bold"}}>{props.name}</Text>

        </TouchableOpacity>

    )
}