/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react'

import {
  NavigationContainer
} from '@react-navigation/native'

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import {
  Home,
  Product
} from './src/screens'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ 
            title: 'Produtos',
            headerStyle: {
              backgroundColor: '#6200EE',
            },
            headerTintColor: '#FFF'
          }}
        />

        <Stack.Screen
          name="Product"
          navigationKey='Product'
          component={Product}
          options={{ 
            title: 'Detalhes',
            headerStyle: {
              backgroundColor: '#6200EE',
            },
            headerTintColor: '#FFF'
          }}
          initialParams={{
            id: 0,
            name: 'nome',
            photo: 'photo',
            description: 'descrição'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
