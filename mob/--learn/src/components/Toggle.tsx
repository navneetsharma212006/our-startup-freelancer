import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Toggle = () => {
    const [Toggle,SetToggle]=useState(true)
  return (
    <View>
      <Text>{Toggle ? "on":"off"}</Text>
      <Button title='click me ' onPress={()=>SetToggle(!Toggle)}/>
    </View>
  )
}

export default Toggle