import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../@screens/WelcomScreen";
import SubscribeScreen from "../@screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    
  return (
    <Stack.Navigator>
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
          <Stack.Screen name="Welcome" options={{
              headerTitleAlign: 'center',
}}  component={WelcomeScreen} />
          <Stack.Screen name="Subscribe" options={{
              headerTitleAlign: 'center',
          }} component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
