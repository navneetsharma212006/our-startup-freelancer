import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'


const Data={
    London:"20Cclear",
    Paris:"20C cear",
    Lucknow:"20C cler",
    Kanpue:"20 clear",
}


const Weather = () => {
    const [city,SetCity]=useState("")
    const [weather,SetWeather]=useState("");

const getweather=()=>{
    SetWeather(Data[city] || "no data available ")
}

  return (
    <View>
      <Text>Weather</Text>
      <TextInput placeholder='enter city' value={city}  onChangeText={SetCity} />
      <Button title='click me ' onPress={()=>{getweather()}}/>
        {weather ? <Text>{weather}</Text>:null}
    </View>
  )
}

export default Weather