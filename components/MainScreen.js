import React from 'react'
import Swipe from './swipe'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Container from './Container';
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons, MaterialIcons,Feather, AntDesign, EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import {Avatar } from 'native-base'

import {View, Text} from 'react-native'

const MainScreen = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarStyle:{
            backgroundColor: "#004e58", 
            borderTopColor: "#acd1c0",
            
            position: "absolute",
            bottom: 15, left: 20, right: 20, elevation:5, borderRadius: 15, height: 90
        },
        // tabBarIcon: ({focused, size, color}) => {
        //     if(route.name === "HomeTab") {
        //         return (<Ionicons name="md-home-outline" size={40} color="red" />)
        //     } else if(route.name === "LikesTab") {
        //         return <Feather name="heart" size={40} color="red" />
        //     }else if(route.name === "AddMediaTab") {
        //         return <EvilIcons name="plus" size={60} color="red" />
        //     } 
        //     else {
        //         return  <Avatar size={12} color={color} source={require("../assets/heroine.jpg")} />
        //     }
        // },
        // tabBarIcon: ({ focused, color, size }: any) => {
        //     let iconName: string = "";
        //     if (route.name === 'HomeTab') {
        //         return focused ? <Avatar size={size} color={color} source={require("../assets/homeactive.png")} /> : <Avatar size={size} color={color} source={require("../assets/home.png")} />
        //     } else if (route.name === 'AddMediaTab') {
        //         return focused ? <Avatar size={size} color={color} source={require("../assets/addactive.png")} /> : <Avatar size={size} color={color} source={require("../assets/add.png")} />
        //     }
        //     else if (route.name === 'LikesTab') {
        //         return focused ? <Avatar size={size} color={color} source={require("../assets/heactive.png")} /> : <Avatar size={size} color={color} source={require("../assets/he.png")} />
        //     } else if (route.name === "SearchTab") {
        //         return (
        //             focused ? <Avatar size={size} color={color} source={require("../assets/seinactive.png")} /> : <Avatar size={size} color={color} source={require("../assets/search.png")} />
        //         )
        //     } else if (route.name === "ProfileTab") {
        //         return (
        //             focused ? <Avatar size={size} color={color} source={require("../assets/profileactive.png")} /> : <Avatar size={size} color={color} source={require("../assets/profile.png")} />
        //         )
        //     }
        // },
        headerShown: false,
        tabBarShowLabel: false,
    })} initialRouteName='HomeTab' >
        <Tab.Screen name="HomeTab" component={Container} options={{
            tabBarIcon: ({focused})=>(
                <View style={{alignItems:"center", justifyContent:"center", top:10}}>
                    <Ionicons name="md-home-outline" size={30} color= {focused ? 'ivory' : '#748c94'} />
                    <Text style={{ color: focused ? 'ivory' : '#748c94', fontSize:12 }}>HOME</Text>
                </View>
            )
        }} />
        <Tab.Screen name="LikesTab" component={Container} options={{
            tabBarIcon: ({focused})=>(
                <View style={{alignItems:"center", justifyContent:"center", top:10}}>
                    <Feather name="heart"  size={30} color= {focused ? 'ivory' : '#748c94'} />
                    <Text style={{ color: focused ? 'ivory' : '#748c94', fontSize:12 }}>HOME</Text>
                </View>
            )
        }} />
        <Tab.Screen name="AddMediaTab" component={Container} options={{
            tabBarIcon: ({focused})=>(
                <View style={{alignItems:"center", justifyContent:"center", top:10}}>
                    <EvilIcons name="plus" size={40} color= {focused ? 'ivory' : '#748c94'} />
                    <Text style={{ color: focused ? 'ivory' : '#748c94', fontSize:12 }}>HOME</Text>
                </View>
            )
        }} /> 
        <Tab.Screen name="ProfileTab" component={Container} options={{
            tabBarIcon: ({focused})=>(
                <View style={{alignItems:"center", justifyContent:"center", top:10}}>
                    <Avatar size={10} color={focused ? '#fff' : '#748c94'} source={require("../assets/heroine.jpg")} />
                    <Text style={{ color: focused ? 'black' : '#748c94', fontSize:12 }}>HOME</Text>
                </View>
            )
        }} />
    </Tab.Navigator >
  )
}

export default MainScreen