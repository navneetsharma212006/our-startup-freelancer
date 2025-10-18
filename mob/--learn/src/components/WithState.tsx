import { View, Text ,Button} from 'react-native'
import React, { useState } from 'react'

const WithState = () => {
    const [count,SetCount]=useState(0)
  return (
    <View>
      <Text>{count}</Text>
      <Button title='increment' onPress={()=>{SetCount(count+1)}}/>
    </View>
  )
}

export default WithState