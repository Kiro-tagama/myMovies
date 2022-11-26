import { useState } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

import { View } from "../../../styleSettings/Themed";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import CategoryList from "../../components/CategoryList";
import Search from "../../components/Search";

export default function HomeScreen() {

  const [type,setType]=useState('movie') // filmes,todos,series
  const [genre,setGenre]=useState() // arrey de opçoes
  const [assistido,setAssistido]=useState(false) //true or false
  
  const [search, setSearch] = useState('')

  return (
    <View style={styles.container}>
      <Header 
        search={search} setSearch={setSearch} 
        type={type} setType={setType} 
      />
      {/* /// */}
      <View style={styles.container}>

        {
          search.length == 0 ?
          <CategoryList type={type}/> :
          <Search type={type} search={search}/>
        }
        
      </View>
      {/* /// */}
      {
        search.length == 0 ?
        <Menu value='home'/>:null
      }
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
