import React, { useEffect, useState } from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import { View,Text } from '../../../styleSettings/Themed';
import { api } from '../../api/api';

export default function Selected() {
  const code=756999


  const [info, setInfo] = useState([])

  useEffect(async()=>{
    setInfo(await api('movie/'+code))
  },[])

  let adultColor=()=>{if (info.adult == false ) {return '#0f0'} else {return '#f00'}}

  const [genres,setGenres] = useState([info.genres])
  
  

  return (
    <View style={{flex:1}}>
      <Image source={{uri:'https://image.tmdb.org/t/p/w500'+info.backdrop_path}} style={styles.img}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[Fonts.h2,{flex:1}]}>{info.title}</Text>
          <Text style={[Fonts.h3,{marginHorizontal:10,color:adultColor()}]}>{info.adult == false ? "L" : "+18"}</Text>
        </View>
        <Text>{info.release_date}</Text>

        <TouchableOpacity onPress={()=>{Linking.openURL(info.homepage)}}>
          <Text style={[styles.link,Fonts.h3]}>Assistir</Text>
        </TouchableOpacity>
        
        <Text>{info.overview}</Text>

      </View>
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
    height: 250,
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
  }

});