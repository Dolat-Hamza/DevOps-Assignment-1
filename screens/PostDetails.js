import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native'
import { useState } from 'react'

export function PostDetails({ navigation, route }) {
  const [getData, setData] = useState([])

  React.useEffect(() => {
    console.log(route)
    gatherData()
  }, [])

  const Item = ({ item }) => (
    <View style={styles.viewstyle}>
      <Text style={{ color: 'black', fontSize: 18 }}>{item.name}</Text>
      <Text style={{ color: 'black', fontSize: 12 }}>{item.body}</Text>
    </View>
  )

  return(
    <View style={styles.container}>
      <DetailItem title={'Name'} value={route.params.item.title}></DetailItem>
      <DetailItem title={'Details'} value={route.params.item.body}></DetailItem>
      <FlatList
        data={getData}
        renderItem={({ item }) => <Item item={item}></Item>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )

  function gatherData() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${route.params.item.id}/comments`,
    )
      .then((val) => val.json())
      .then((json) => {
        console.log(route.params.userId)
        setData(json)
      })
  }

  function DetailItem({ title, value }) {
    return (
      <View>
        <Text style={styles.textStyle}>{title}</Text>
        <TextInput
          style={styles.textinputt}
          numberOfLines={5}
          editable={false}
          value={value}
        ></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textField: {
    borderColor: 'red',
    height: 80,
    width: 150,
  },
  textStyle: {
    paddingLeft: 15,
    paddingTop: 15,
    fontSize: 24,
    fontWeight: '700',
  },
  viewstyle: {
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: '#dcdcdc',
    padding: 20,
    borderRadius: 5,
    margin: 20,
  },
  textinputt: {
    borderColor: '#000000',
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
    color: '#000000',
  },
})
