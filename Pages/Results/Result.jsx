import React from 'react'
import { View, Text, Image } from 'react-native'

const Result = ({route}) => {
  return (
    <View style = {{padding: 20}}>
      <Text>
        {route.name}
      </Text>

      <Image
        style={{ width: 24, height: 24,}}
        source={
          require('./favicon.png')
        }
      />
    </View>
  )
}

export default Result;
