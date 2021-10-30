import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './screens/HomeScreen'
import { BottomBarScreen } from './screens/BottomNavigation'
const Stack = createStackNavigator()
import { Posts } from './screens/Posts'
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Details Page"
          component={BottomBarScreen}
          options={{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="PostsScreen"
          component={Posts}
          options={{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
