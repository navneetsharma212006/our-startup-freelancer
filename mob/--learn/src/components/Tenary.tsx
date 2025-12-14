import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword=()=><Text>Valid password</Text>
const InvalidPassword=()=><Text>Invalid Password</Text>


const Password=({isValid})=>{
    return isValid ? <ValidPassword/> : <InvalidPassword/>
}

const Tenary = () => {
  return (
    <View>
      <Text>Tenary</Text>
      <Password  isValid={true}/>
    </View>
  )
}

export default Tenary