import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import React from 'react'


const ItemDisplay = [
    { name: "Chairs", id: "1A" },
    { name: "Desks", id:"2B" },
    { name: "Cupboard", id:"3c" },
    { name: "Tables", id:"4D" },
  { name: "Shoe Racks", id: "5E" },
  { name: "Stool", id: "6F" },
  { name: "Drawers", id: "7G" },
        { name: "Dinning Tables", id:"8HR" }



    

]
const Seperator = () => <View style={ItemStyles.seperator}></View>;

const Header = () => <Text style={{ fontSize: 30, textAlign: "center"}}>List of Furnitures</Text>

const Item = ({ name }) => {
  return (
    <View  style={{ flex: .8 }}>
          <ScrollView>

        <Text style={ItemStyles.item}>{name}</Text>
            </ScrollView>

    </View>
  )
}


const FlatListA = () => {

const renderItem =({item}) => <Item name={item.name}/>
return (
  <View>
    <FlatList data={ItemDisplay} renderItem={renderItem} keyExtractor={(item => item.id)}
      ItemSeparatorComponent={Seperator}  ListHeaderComponent={Header}/>
  </View>
  )
}
const ItemStyles = StyleSheet.create({
  item: {
    color: "#1a1a1a",
    fontSize: 25,
    paddingVertical:20
  },
  seperator: {
borderBottomWidth: 1,
borderColor:"#1a1a1a"
  }
})

export default FlatListA