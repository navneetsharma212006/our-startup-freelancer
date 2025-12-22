import { View, Text, Image } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <Image source={require('../assets/fra.png')} style={{width:100, height:100 , borderRadius:100}}/>
    </View>
  )
}

export default Profile