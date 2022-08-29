import {StyleSheet,Text, TextInput, View, TouchableOpacity,
  KeyboardAvoidingView, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const InputContainer = ({HandleItems,input,HandlerInput}) => {
  return (
    <View style={styles.inputContainer}>

    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.input}>
      <TextInput placeholder="Write You Todo" value={input} onChangeText={text => HandlerInput(text)}  />
    </KeyboardAvoidingView>
      
        <TouchableOpacity style={styles.button} onPress={()=> HandleItems(input)}>
          {/* <Text style={styles.buttonWapper}>+</Text> */}
          <Ionicons name="send" color="#2980b9" size={30}/>
        </TouchableOpacity>

    </View>
  )
}

export default InputContainer;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }, 
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 60,
    // width: Dimensions.get("window").width > 360 ? 300 : 250 ,
    width: "95%",
    backgroundColor: "white",
    position: "relative",
  },
  button: {
    position: "absolute",
    right: 20,
  },
})