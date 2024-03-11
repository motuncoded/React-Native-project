import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Contact = () => {
      const navigation = useNavigation();

  return (
    <View>
      <Text></Text>
      <Button
                title="Go Back"
                onPress={() => {
                    navigation.goBack();
                }}/>
    </View>
  )
}

export default Contact;