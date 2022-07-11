import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';

import { FontAwesome5 } from '@expo/vector-icons';

import { Text, View } from "../../../styleSettings/Themed";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";


export default function HomeScreen() {
  const navigation = useNavigation()

  const [tipo,setTipo]=useState() // filmes,todos,series
  const [genero,setGenero]=useState() // arrey de opçoes
  const [assistido,setAssistido]=useState(false) //true or false
  
  return (
    <View style={styles.container}>
      <Header/>
      {/* /// */}
      <View style={styles.list}>
        <Text>categorias</Text>
        {/* <FlatList data={}/> */}
      </View>
      {/* /// */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={()=>setAssistido(false)}>
          <View style={[styles.opcoes,{borderTopLeftRadius:10,borderBottomLeftRadius:10}]}>
            <Text></Text>
            <Text>Todos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={[styles.opcoes,{}]}>
            <Text><FontAwesome5 name="random" size={30}/></Text>
            <Text>Aleatorio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setAssistido(true)}>
          <View style={[styles.opcoes,{borderTopRightRadius:10,borderBottomRightRadius:10}]}>
            <Text></Text>
            <Text>Já assisti</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
