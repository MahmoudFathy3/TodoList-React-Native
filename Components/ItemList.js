import React, {useState} from 'react';
import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function ItemList({item,DeleteHandler}) {
  
  

  const Items = item.length ? item.map((item, index) => {
    return(
      <TouchableOpacity style={styles.TextWapper} key={index} onPress={() => DeleteHandler(index)} >
        <View style={styles.Left}>
          <View style={styles.box}></View>
          <Text style={styles.text}>{item}</Text>
        </View>
        <FontAwesome name="check-square-o" size={30} color="green" />
      </TouchableOpacity>
    )
  }) : <Text style={styles.ErrorMessage}>There is no TodoList</Text>

  return (
    <View style={{ height: "75%"}}>
      <ScrollView >
        {Items}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  TextWapper: {
    width: "90%",
    marginVertical: 5,
    marginHorizontal: 20,
    textAlign: "center",
    padding: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Left: {
    flexDirection: "row",
    alignItems: "center",
  },
  box:{
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundColor: "#aed6f1",
    borderWidth: 1,
    borderColor: "#aed6f1",
    marginRight: 5
  },
  text: {
    fontSize: 16,
    maxWidth: "85%"
  }, 
  ErrorMessage:{
    textAlign: 'center',
    color: "#2980b9",
    fontSize: 20,
    fontWeight: 'bold'
  },
})