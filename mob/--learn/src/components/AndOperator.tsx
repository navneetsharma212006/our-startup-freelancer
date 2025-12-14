import { View, Text, FlatList } from 'react-native'
import React from 'react'
import index from '../app'

const AndOperator = () => {
    const grocery=['milk','bread','eggs','cheese']

  return (
    <View>
      <Text>Cart</Text>
      {grocery.length>0 && (<Text> your items {grocery.length}</Text>)}
      <FlatList data={grocery}  keyExtractor={(item,index)=>index.toString()} renderItem={({item})=> (<Text>{item}</Text>)}/>
    </View>
  )
}

export default AndOperator