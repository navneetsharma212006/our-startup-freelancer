import { View, Text,Button } from 'react-native'
import React, {useState} from 'react'

const BgColor = () => {
    const [color,SetColor]=useState('')
  return (
    <View style={{backgroundColor:color ,flex:1}}>
      <Button style={{height:400, width:400, BorderRadius:100}}  onPress={()=>{SetColor('#000')}}/>
       {/* <Button style={{}}/>
        <Button/> */}

    </View>
  )
}

export default BgColor