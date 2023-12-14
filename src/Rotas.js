import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Carrinho from './telas/Carrinho'
import Servicos from './telas/Servicos'

import { cores } from './estilos'

const Tab = createBottomTabNavigator()

function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: cores.terracota,
          tabBarInactiveTintColor: cores.claro,
          tabBarActiveBackgroundColor: cores.terracota,
          tabBarInactiveBackgroundColor: cores.laranja,
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 16,
            textAlignVertical: 'center',
            height: '95%',
            width: '100%',
            backgroundColor: cores.laranja,
          },
          tabBarStyle: {
            width: '100%',
            height: 70,
            lineHeight: 21,
          },
          tabBarIconStyle:{
            display: 'none',
          },
          keyBoarHidesTabBar: true,
        }}
      >
        <Tab.Screen name="Servicos" component={Servicos} options={{ headerShown: false }}/>
        <Tab.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Rotas
