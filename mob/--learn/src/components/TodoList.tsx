import { View, Text, TextInput,Button } from 'react-native'
import React, { useState } from 'react'

const TodoList = () => {
    const [Data,SetData]=useState([])
    const [input,SetInput]=useState('')

    const Handle=()=>{
        SetData([...Data,input])
        SetInput('')
    }
  return (
    <View>
      <Text>TodoList</Text>
      <TextInput placeholder='Enter Todo' value={input} onChangeText={SetInput}/>
      <Button title='Add task' onPress={()=>Handle()}/>
        {Data.map((data, index)=>(<Text>{data}</Text>))}
    </View>
  )
}

export default TodoList