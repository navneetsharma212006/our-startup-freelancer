import { View, Text, Button } from 'react-native'
import React from 'react'

const WithoutState = () => {
    let count=0;

  return (
    <View>
     <Text>count :{count}</Text>
     <Button onPress={()=>console.log("pressed ")} title='click me '/>
    </View>
  )
}

export default WithoutState