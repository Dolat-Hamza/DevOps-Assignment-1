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
import { PostDetails } from './PostDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export function PostsNav({ userId }) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Posts"
          component={Posts}
          options={{ headerShown: false }}
          initialParams={{ userId }}
        />
        <Stack.Screen
          name="PostDetails"
          options={{ headerShown: false }}
          component={PostDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export function Posts({ navigation, route }) {
  const [getLoading, setLoading] = useState(true)
  const [getData, setData] = useState([])

  React.useEffect(() => {
    console.log(route)
    gatherData()
  }, [])

  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PostDetails', { item })
      }}
    >
      <View style={styles.containers}>
        <Text style={styles.text}>{item.title}</Text>
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
      `https://jsonplaceholder.typicode.com/users/${route.params.userId}/posts`,
    )
      .then((val) => val.json())
      .then((json) => {
        console.log(route.params.userId)
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
  containers: {
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
  text: {
    color: 'white',
  },
})
