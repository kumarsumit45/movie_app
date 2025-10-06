import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TabIcon from '@/components/tabIcon'
import AppIcons from '@/constants/icons'
const RootLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarItemStyle:{
            // width:"100%",
            // flex:1,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
        },
        tabBarStyle:{
            backgroundColor:"#0F0D23",
            marginBottom:36,
            marginHorizontal:8,
            borderRadius:50,
            height:52,
            position:"absolute",
            overflow:"hidden",
            borderWidth:0.5,
            borderColor:"#0f0d23",
            alignItems:"center",
            justifyContent:"center"
            
        },
        
    }}>
        <Tabs.Screen
         name='index' 
         options={{
            title:"Home",
            headerShown:false,
            tabBarIcon:({focused})=> (
                <TabIcon 
                focused ={focused} 
                icon={AppIcons.home}
                title ="Home"
                />
            )
         }} />
        <Tabs.Screen name='search' options={{
            title:"Home",
            headerShown:false,
            tabBarIcon:({focused})=> (
                <TabIcon 
                focused ={focused} 
                icon={AppIcons.search}
                title ="Search"
                />
            )
         }} />
        <Tabs.Screen name='fav' options={{
            title:"Home",
            headerShown:false,
            tabBarIcon:({focused})=> (
                <TabIcon 
                focused ={focused} 
                icon={AppIcons.save}
                title ="Saved"
                />
            )
         }}/>
        <Tabs.Screen name='profile' options={{
            title:"Home",
            headerShown:false,
            tabBarIcon:({focused})=> (
                <TabIcon 
                focused ={focused} 
                icon={AppIcons.person}
                title ="Profile"
                />
            )
         }}/>
    </Tabs>
  )
}

export default RootLayout