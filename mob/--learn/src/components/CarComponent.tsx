import { View, Text, Button, Image } from 'react-native'
import React from 'react'

const CarComponent = () => {
    let price=2000;
    let carname='Ferrari';
    let rating ='3.9'
  return (
    <View>
     <Text>{price}</Text>
     <Image source={require('../assets/fra.png')} style={{width:100, height:100}}/>
     <Text>{carname}</Text>
     <Text>{rating}</Text>
     <Button title={"add to cart"}/>
    </View>
  )
}

export default CarComponent