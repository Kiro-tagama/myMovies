import { useContext } from "react";
import { Button,StyleSheet } from "react-native";
import { FirebaseContext } from "../../firebase/firebaseContext";

import { Text, View } from "../../../styleSettings/Themed";

export default function ProfileScreen(){
  const {signOut} = useContext(FirebaseContext)
  return (
    <View style={styles.container}>
      <Text>oi</Text>
      <Button title="deslogar" color='red' onPress={()=>signOut()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
})