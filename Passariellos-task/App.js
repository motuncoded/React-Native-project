import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator,Navigator } from '@react-navigation/bottom-tabs';
import { Home, More, Menu, Location } from "./@screens";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



export default function App() {
const Tab = createBottomTabNavigator();

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom:0,
      right:0,
      left: 0,
      height: 60,
      background:"#fafafa"
    }
  }
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
              <AntDesign name="home" size={24} color={focused ? "#890101":"#0a0a0a"} />
                  <Text style={{ fontSize: 12 }} color={focused ? "#890101" :"#0a0a0a"}>Home</Text>
          </View> 
              )
           
            }}}/>
        <Tab.Screen name="Menu & Order" component={Menu}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <MaterialIcons name="restaurant-menu" size={24} color={focused ? "#890101" : "#0a0a0a"} />
                  <Text style={{ fontSize: 12 }} color={focused ? "#890101" :"#0a0a0a"}>Menu & Order</Text>
                </View>
              )
            }
          }} />
        <Tab.Screen name="Location" component={Location } 
        options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Ionicons name="location" size={24} color={focused ? "#890101" : "#0a0a0a"} />
                  <Text style={{ fontSize: 12 }} color={focused ? "#890101" :"#0a0a0a"}>Location</Text>

                </View>
              )
            }
          }} 
/>
        <Tab.Screen name="More" component={More } options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Feather name="shopping-bag" size={24} color={focused ? "#890101" : "#0a0a0a"} />
                  <Text style={{ fontSize: 12 }} color={focused ? "#890101" :"#0a0a0a"}>More</Text>
                </View>
              )
            }
          }} />




      </Tab.Navigator>
      </NavigationContainer>
  );
}


