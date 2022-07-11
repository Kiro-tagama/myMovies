import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';

import { FontAwesome5 } from '@expo/vector-icons';

import { Text, View } from "../../../styleSettings/Themed";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

import { useNavigation } from "@react-navigation/native";
import Menu from "../../components/Menu";


export default function HomeScreen() {
  const navigation = useNavigation()

  const [tipo,setTipo]=useState() // filmes,todos,series
  const [genero,setGenero]=useState() // arrey de opçoes
  const [assistido,setAssistido]=useState(false) //true or false
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerAling}>
          <Text style={Fonts.h2}>myMovies</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Text>
              <FontAwesome5 name="user-circle" size={35} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.headerAling,{marginTop:20,justifyContent:'space-evenly'}]}>
          <Text>Filmes</Text>
          {/* <Text>Todos</Text> */}
          <Text>Séries</Text>
        </View>
      </View>
      {/* /// */}
      <View style={styles.list}>
        <Text>categorias</Text>
        {/* <FlatList data={}/> */}
      </View>
      {/* /// */}
      <Menu/>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: Colors.azulAtivo,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop:40,
    borderBottomStartRadius:15,
    borderBottomEndRadius:15,
  },
  headerAling:{
    backgroundColor:'transparent',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  list: {
    flex:1,
    paddingHorizontal:20,
    paddingVertical:5
  },
  menu:{
    marginBottom:10,
    flexDirection:'row',
    justifyContent:'center'
  },
  opcoes:{
    backgroundColor:Colors.azulAtivo,
    alignItems:'center',
    width: 110,
    paddingVertical: 10,
    flexDirection:'column'
  },
});
