import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import React from 'react'
import { UserDetails } from './UserDetails'

import { PostsNav } from './Posts'

import { Todos } from './Todo'
import { AlbumNav } from './Album'

const Tab = createBottomTabNavigator()

export function BottomBarScreen({ navigation, route }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="UserDetails"
        children={() => <UserDetails user={route.params.user} />}
        options={{
          tabBarLabel: 'User Details',
          tabBarIcon: ({ color, size }) => (
            <Icon name="sc-facebook" type="evilicon" />
          ),
        }}
      />
      <Tab.Screen
        name="Album"
        children={() => <AlbumNav userId={route.params.user.id} />}
        options={{
          tabBarLabel: 'Album',
          tabBarIcon: ({ color, size }) => <Icon name="image" />,
        }}
      />
      <Tab.Screen
        name="Posts"
        children={() => <PostsNav userId={route.params.user.id} />}
        options={{
          tabBarLabel: 'Posts',
          tabBarIcon: ({ color, size }) => (
            <Icon name="sc-telegram" type="evilicon" />
          ),
        }}
      />
      <Tab.Screen
        name="Todos"
        children={() => <Todos userId={route.params.user.id} />}
        options={{
          tabBarLabel: 'Todos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="alarm" type="ionicons" />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
