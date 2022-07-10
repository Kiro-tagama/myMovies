import { useContext } from "react";
import { Button,StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "../../../styleSettings/Themed";

import { FirebaseContext } from "../../firebase/firebaseContext";
import Colors from "../../../constants/Colors";

import { SimpleLineIcons,Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function ProfileScreen(){
  const { deslog, get } = useContext(FirebaseContext)

  const navigation=useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <SimpleLineIcons name="arrow-left" size={30} color={Colors.azulAtivo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deslog}>
        <Feather name="log-out" size={30} color="#e33" />
        </TouchableOpacity>
      </View>
      <View style={{padding:20,flex:1}}>

      </View>
      <StatusBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop:45,
    borderBottomStartRadius:15,
    borderBottomEndRadius:15,
    flexDirection:"row",
    justifyContent:"space-between"
  },
})