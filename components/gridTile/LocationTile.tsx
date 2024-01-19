import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LocationI } from '../../interfaces/rickAndMorty.interface'

type Props = {
    item:LocationI
}

const LocationTile = ({item}: Props) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}

export default LocationTile

const styles = StyleSheet.create({
    container:{
        padding:4,
        backgroundColor:'gray'
    }
})