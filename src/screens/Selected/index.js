import React, { useEffect, useState } from 'react';
import { Image, Linking, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import { View,Text } from '../../../styleSettings/Themed';
import { api } from '../../api/api';
import { FontAwesome5,Ionicons } from '@expo/vector-icons';
import Menu from '../../components/Menu';

export default function Selected(props) {
  const [info, setInfo] = useState([])

  useEffect(async()=>{
    setInfo(await api('movie/'+props.route.params))
  },[props.route.params])

  console.log('isso'+info);

  let adultColor=()=>{if (info.adult == false ) {return '#0f0'} else {return '#f00'}}

  const informations = (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[Fonts.h2,{flex:1}]}>{info.title}</Text>
        <Text style={[Fonts.h3,{marginHorizontal:10,color:adultColor()}]}>{info.adult == false ? "L" : "+18"}</Text>
      </View>
      <Text>{info.release_date}</Text>

      <ScrollView>
        <Text>{info.overview}</Text>
      </ScrollView>
    </View>
  )

  return (
    <View style={{flex:1}}>

      <Image source={{uri:'https://image.tmdb.org/t/p/original'+info.backdrop_path}} style={styles.img}/>

      {informations}

      <Menu value='selected' play={info.homepage}/>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop:20,
  },
  img:{
    width: '100%',
    height: 300,
  },
  header:{
    flexDirection:'row',
    alignItems:'center'
  },
  link:{
    borderColor:Colors.azulAtivo,
    borderWidth:5,
    borderRadius:10,
    textAlign:'center',
    paddingTop:7,
    marginVertical:15
  },

});