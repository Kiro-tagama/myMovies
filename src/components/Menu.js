import { StyleSheet, TouchableOpacity, Image } from "react-native"
import { View, Text } from "../../styleSettings/Themed";
import { FontAwesome5,Ionicons,MaterialCommunityIcons  } from '@expo/vector-icons';


import imgDivider from '../assets/dividerBlue.png'
import { api } from "../api/api";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import Colors from "../../constants/Colors";


export default function Menu(props){

  // max number id s for api
  const [max, setMax]= useState(0)
  const navigation = useNavigation()

  useEffect(async()=>{
    setMax(await api('movie/latest'))
  },[])

  async function randomPlay(){
    // min 2 max
    //return Math.floor(Math.random() * (max - min) + min)
    const random=Math.floor(Math.random()*(max.id-0)+0); 
    return navigation.navigate("Selected",random)
  }

  const menuHome=(
  <>
    <TouchableOpacity>
      <View style={[styles.opcoes,{borderTopLeftRadius:10,borderBottomLeftRadius:10}]}>
        <Text><MaterialCommunityIcons name="movie-open-outline" size={30}/></Text>
        <Text style={styles.txtMenu}>Todos</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={randomPlay}>
      <View style={styles.opcoes}>
        <Text>
          <FontAwesome5 name="random" size={30}/>
        </Text>
        <Text style={styles.txtMenu}>Aleatorio</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={[styles.opcoes]}>
        <Text><FontAwesome5 name="heart" size={30}/></Text>
        <Text style={styles.txtMenu}>Favoritos</Text>
      </View>
    </TouchableOpacity>
  </>
  )

  const menuSelected=(
  <>
    <TouchableOpacity style={styles.btn}>
      <Text><FontAwesome5 name="heart" size={30} /></Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn} onPress={randomPlay}>
      <Text><FontAwesome5 name="random" size={30}/></Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn} onPress={()=>{Linking.openURL(props.play)}}>
      <Text><Ionicons name="play-outline" size={30}/></Text>
    </TouchableOpacity>
  </>
  )

  return(
    <View>
    { props.value == 'home' ?
      <Image source={imgDivider} style={{width:"100%",transform: [{ rotate: '180deg' }]}}/>
      : null 
    }
    <View style={styles.menu}>
      { props.value == 'home' ?
        menuHome : menuSelected
      }
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menu:{
    flexDirection:'row',
    justifyContent:"space-around",
    marginBottom:5
  },
  opcoes:{
    alignItems:'center',
    width: 110,
    paddingBottom: 10,
    flexDirection:'column'
  },
  btn:{
    borderWidth:3,
    borderColor:Colors.azulAtivo,
    borderRadius:15,
    padding:12,
    paddingHorizontal:30,
  },
  txtMenu:{
    fontSize:12,
    marginTop:5
  }
});
