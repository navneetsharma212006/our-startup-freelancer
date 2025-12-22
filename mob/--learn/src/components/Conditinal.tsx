import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword=()=><Text>Valid password</Text>
const InvalidPassword=()=><Text>Invalid Password</Text>

const Password=({isValid})=>{
    if(isValid){
        return <ValidPassword/>
    }
    return <InvalidPassword/>
}

const Conditinal = () => {
  return (
    <View>
      <Text>Conditinal</Text>
      <Password isValid={false}/>
    </View>
  )
}

export default Conditinal