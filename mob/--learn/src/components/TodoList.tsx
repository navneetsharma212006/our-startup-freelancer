import { View, Text, TextInput,Button } from 'react-native'
import React, { useReducer, useState } from 'react'

const initialState={Data:[]}

const reducer=(state,action)=>{
  switch(action.type){
    case 'add':return {}
  }
}

const TodoList = () => {

  const [state,dispatch]=useReducer(reducer,initialState)
    // const [Data,SetData]=useState([])
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