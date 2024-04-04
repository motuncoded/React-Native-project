import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Signup from "./Signup";
import { createStackNavigator } from "@react-navigation/stack";

import Signin from "./Signin"
import Onboarding from "./Onboarding "

const AuthStack = () => {
      const Stack = createStackNavigator();


  return (
     <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Dashboard" component={Onboarding} />

      </Stack.Navigator>)
}

export default AuthStack

const styles = StyleSheet.create({})