import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { FontAwesome5 } from '@expo/vector-icons';

import { Text, View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";
import Axios from "axios";


// https://api.themoviedb.org/3/movie/550?api_key=d1615f652decb87e27cb2749542f5f69

export default function HomeScreen() {
  const [tipo,setTipo]=useState() // filmes,todos,series
  const [genero,setGenero]=useState() // arrey de opçoes
  const [assistido,setAssistido]=useState(false) //true or false

  function api(tipe,genero) {
    const isso=Axios.get('https://api.themoviedb.org/3/movie/550?api_key=d1615f652decb87e27cb2749542f5f69&language=pt-BR').then(r=>console.log(r.json()))
    console.log('isso',isso);
  }
  api()
  // function random(params) {
  //   return console.log('gerar um filmes');
  // }

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerAling}>
          <Text style={Fonts.h2}>myMovies</Text>
          <Text>
          <FontAwesome5 name="user-circle" size={35} />
          </Text>
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
