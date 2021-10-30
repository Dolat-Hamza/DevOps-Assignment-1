import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AlbumDetails } from './AlbumDetails'
import { albumImage } from './AlbumImage'

const Stack = createStackNavigator()

export function AlbumNav({ userId }) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Album"
          component={Album}
          options={{ headerShown: false }}
          initialParams={{ userId }}
        />
        <Stack.Screen
          name="AlbumDetails"
          options={{ headerShown: false }}
          component={AlbumDetails}
        />
        <Stack.Screen
          name="AlbumImage"
          options={{ headerShown: false }}
          component={albumImage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export function Album({ navigation, route }) {
  const [getLoading, setLoading] = useState(true)
  const [getData, setData] = useState([])

  React.useEffect(() => {
    gatherData()
  }, [])

  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AlbumDetails', { item })
      }}
    >
      <View style={styles.viewstyle}>
        <Text style={{ color: 'white' }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )

  return getLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={getData}
        renderItem={({ item }) => <Item item={item}></Item>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )

  function gatherData() {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${route.params.userId}/albums`,
    )
      .then((val) => val.json())
      .then((json) => {
        setData(json)
        setLoading(false)
      })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  viewstyle: {
    backgroundColor: '#1d1256',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
  },
})
