import * as React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { List } from 'react-native-paper'

export function UserDetails({ navigation, user }) {
  return (
    <ScrollView style={styles.container}>
      <List.Section title="Information Tab">
        <List.Accordion
          title="Basic Info"
          left={(props) => <List.Icon {...props} icon="book" />}
        >
          <List.Item title="Name" description={user['name']} />
          <List.Item title="Username" description={user['username']} />
          <List.Item title="Email" description={user['email']} />
          <List.Item title="Website" description={user['website']} />
          <List.Item title="Phone" description={user['phone']} />
        </List.Accordion>

        <List.Accordion
          title="Company Details"
          left={(props) => <List.Icon {...props} icon="briefcase" />}
        >
          <List.Item
            title="Company Name"
            description={user['company']['name']}
          />
          <List.Item
            title="Company Catch Phrase"
            description={user['company']['catchPhrase']}
          />
          <List.Item
            title="Business Type"
            description={user['company']['bs']}
          />
        </List.Accordion>

        <List.Accordion
          title="Address"
          left={(props) => <List.Icon {...props} icon="map" />}
        >
          <List.Item title="Street" description={user['address']['street']} />
          <List.Item title="Suite" description={user['address']['suite']} />
          <List.Item
            title="Zip Codes"
            description={user['address']['zipcode']}
          />
          <List.Item title="City" description={user['address']['city']} />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
})
