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

export function HomeScreen({ navigation, route }) {
  const [getLoading, setLoading] = useState(true)
  const [getData, setData] = useState([])

  React.useEffect(() => {
    gatherData()
  }, [])

  const Item = ({ user }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details Page', { user })
        console.log(user.name)
      }}
    >
      <View style={styles.containerr}>
        <Text style={styles.texts}>{user.name}</Text>
        <Text style={styles.text}>{user.email}</Text>
        <Text style={styles.text}>{user.website}</Text>
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
        renderItem={({ item }) => <Item user={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )

  function gatherData() {
    fetch('https://jsonplaceholder.typicode.com/users')
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
  containerr: {
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
    textAlign: 'center',
    fontSize: 15,
  },
  texts: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
})
