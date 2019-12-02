import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import {Row} from './Row'


export const Pokemons=(props)=> {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.pokemons}
        renderItem={({ item }) => <Row pokemon={item} getPokemonDetail={props.getPokemonDetail}/>}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  

