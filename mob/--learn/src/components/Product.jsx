import { View, Text ,Image} from 'react-native'
import React from 'react'

const Product = ({name,rating,image}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{rating}</Text>
      <Image source={{uri: image}} style={{width:100, height:100}}/>
    </View>
  )
}

export default Product