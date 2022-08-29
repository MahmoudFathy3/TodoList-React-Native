import React, {useState} from 'react';

import { StyleSheet, Text, View , StatusBar, Alert,TouchableOpacity, Button, I18nManager } from 'react-native';
import InputContainer from './Components/InputContainer';
import ItemList from './Components/ItemList';
import CompletedScreen from './Screen/CompletedScreen';


export default function App() {
  const [input, setinput]= useState(null);
  const [item, setItem] = useState([]);

  I18nManager.forceRTL(false)

    // Handle value input
    const HandlerInput = (value) => {
        setinput(value)
    }


    // Add value input in The Array
    const HandleItems = (Items) => {
      if(input){
        setItem([...item, Items])
        setinput("")
      } else {
        Alert.alert("Please fill in the field first")
      }
    }

    //  Delete the element from the array  
    const DeleteHandler = (id)=> {
      setItem(item.filter((item , index) => index !== id))
    }


  return (
    <View style={styles.container} >
      <View style={styles.headerWapper}>
      <Text style={styles.title}>Today's Tasks</Text>
      <TouchableOpacity>
        <Button title="completed Tasks"  color="#2980b9" style={styles.button}/>
      </TouchableOpacity>
      </View>
      <ItemList item={item}  DeleteHandler={DeleteHandler} />
      <InputContainer input={input} HandleItems={HandleItems} HandlerInput={HandlerInput}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },
  headerWapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }, 
});
