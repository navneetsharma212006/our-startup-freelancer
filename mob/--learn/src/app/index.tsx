import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Greet from '../components/greet'
import Name from '../components/Name'
import Handle from '../components/Handle'
import Message from '../components/Message'
import Profile from '../components/Profile'
import ButtonComponent from '../components/ButtonComponent'
import CarComponent from '../components/CarComponent'
import ListData from '../components/ListData'
import Product from '../components/Product'
import Conditinal from '../components/Conditinal'
import AndOperator from '../components/AndOperator'
import Tenary from '../components/Tenary'
import WithoutState from '../components/WithoutState'
import WithState from '../components/WithState'
import Toggle from '../components/Toggle'
import Weather from '../components/Weather'
import BgColor from '../components/BgColor'
import TodoList from '../components/TodoList'
import UseEfect from '../components/UseEfect'
import UseReduc from '../components/UseEfect'
import { UserContext, UserProvider } from '../Context/UserContext'
import useContext from '../components/useContext'
const products = [
  {
    image: "https://picsum.photos/200/300?random=1",
    name: "Product 1",
    rating: 4.5,
    price: 29.99,
  },
  {
    image: "https://picsum.photos/200/300?random=2",
    name: "Product 2",
    rating: 4.0,
    price: 19.99,
  },
  // ... (you can keep the rest of your items here)
];


const index = () => {
  return (
    <View>
{/* //    <View style={styles.innerContainer}><Greet/></View>
// <View  style={styles.innerContainer}><Name/></View>
// <View  style={styles.innerContainer}>  <Handle/></View>
// <View  style={styles.innerContainer}> <Message/> </View> */}
   
   


    {/* <Profile/>
   <Name/>
   <Handle/>
   <ButtonComponent/>  */}
  {/* //  /* <CarComponent/>  */}
  {/* <ListData/> */}
  {/* {products.map((item,index)=>(
    <Product  key={index} name={item.name} rating={item.rating} image={item.image} />
  ))} */}
  {/* <Conditinal/>
  <AndOperator/>
  <Tenary/> */}
{/* <WithoutState/>
<WithState/>
<Toggle/> */}
{/* <Weather/> */}
{/* <BgColor/> */}
{/* <TodoList/> */}
{/* <UseEfect/> */}
{/* <UseReduc/> */}
{/* <UserProvider>
  <useContext/>
</UserProvider> */}
   <Text className="text-lg font-bold text-blue-800">Hello NativeWind!</Text>
    </View>
  )
}

// const styles=StyleSheet.create({
// container:{
//   flex:1,
//   justifyContent:'center',
//   alignItems:'center'
// },
// innerContainer:{
//   margin:10,
//   padding:10,
//   borderRadius:1,
//   shadowRadius:1,
// }})

export default index