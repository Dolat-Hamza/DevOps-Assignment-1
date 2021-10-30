import { View, Image } from 'react-native'
import React from 'react'

export function albumImage({ route }) {
  return (
    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <Image
        source={{ uri: `${route.params.itemUrl}` }}
        style={{ width: 900, height: 600 }}
      />
    </View>
  )
}
