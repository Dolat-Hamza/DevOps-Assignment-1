import React from 'react'
import { ActivityIndicator, StyleSheet, View, FlatList } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { useState } from 'react'

export function AlbumDetails({ navigation, route }) {
  const [getData, setData] = useState([])

  React.useEffect(() => {
    gatherData()
  }, [])

  const Item = ({ item }) => (
    <ListItem bottomDivider style={styles.container}>
      <Avatar
        onPress={() => navigation.navigate('AlbumImage', { itemUrl: item.url })}
        source={{
          uri: `${item.thumbnailUrl}`,
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )

  return(
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
      `https://jsonplaceholder.typicode.com/albums/${route.params.item.id}/photos`,
    )
      .then((val) => val.json())
      .then((json) => {
        setData(json)
      })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dcdcdc',
  },
})
