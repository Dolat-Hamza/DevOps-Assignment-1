import React from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { useState } from 'react';

export function Todos({ navigation, userId }) {
  const [getData, setData] = useState([]);

  React.useEffect(() => {
    gatherData();
  }, []);

  function getColorByCompletion(value) {
    if (value == false) {
      return 'red';
    } else {
      return 'green';
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={getData}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <Icon
              name="alarm"
              type="ionicons"
              color={getColorByCompletion(item.completed)}
            />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );

  function gatherData() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((val) => val.json())
      .then((json) => {
        setData(json);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dcdcdc',
  },
});
