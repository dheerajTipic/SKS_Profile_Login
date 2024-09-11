import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Tablayout() {
  return (
   <Tabs screenOptions={{headerShown:false}}>
   
   
    {/* <Tabs.Screen name ='home'
    options={{
        tabBarLabel:'Home',
        tabBarIcon:({color} )=><Ionicons name="home" size={24} color={color} />

    }}
    /> */}
   
   
    <Tabs.Screen name ='service_info'
     options={{
        tabBarLabel:'Service',
        tabBarIcon:({color} )=><Ionicons name="person-circle-sharp" size={24} color={color} />

    }}
    />
    
    
     {/* <Tabs.Screen name ='service_info'
      options={{
        tabBarLabel:'ServiceInfo',
        tabBarIcon:({color} )=><Ionicons name="person" size={24} color={color} />

    }}
    /> */}
    <Tabs.Screen name ='profile'   
     options={{
        tabBarLabel:'Profile',
        tabBarIcon:({color} )=><Ionicons name="person" size={24} color={color} />

    }}
    />
   </Tabs>
  )
}