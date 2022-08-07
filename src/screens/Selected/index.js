import React, { useEffect, useState } from 'react';
import { Image, Linking, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import { View,Text } from '../../../styleSettings/Themed';
import { api } from '../../api/api';
import Menu from '../../components/Menu';
import {Ionicons} from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

export default function Selected(props) {
  const [info, setInfo] = useState([])
  const [filter, setFilter] = useState(false)

  useEffect(async()=>{
    setInfo(await api('movie/'+props.route.params))
  },[props.route.params])

  const informations = (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[Fonts.h2,{flex:1}]}>{info.title}</Text>
        <Text style={[Fonts.h3,{marginHorizontal:10,color:'#f00'}]}>{info.adult == false ? null : "+18"}</Text>
      </View>
      <Text/>
      <Text>{info.release_date}</Text>
      <Text>{info.runtime} min</Text>
      <Text/>

      <ScrollView>
        <Text>{info.overview}</Text>
      </ScrollView>
    </View>
  )

  return (
    <View style={{flex:1}}>
      <View>
        <Image source={{uri:'https://image.tmdb.org/t/p/original'+info.backdrop_path}} style={styles.img}/>
        {info.adult == false? null :
          <>
            {filter?null:
              <BlurView style={styles.filter}
                intensity={100} tint='dark'
              ></BlurView>
            }
            <TouchableOpacity onPress={()=>setFilter(!filter)}
            style={{position:'absolute',right:20,bottom:20}}>
              <View style={{padding:10,paddingHorizontal:11,borderRadius:100}}>
                {filter?
                  <Ionicons name="ios-eye-off-outline" size={20} color={Colors.azulAtivo} />:
                  <Ionicons name="ios-eye-outline" size={20} color={Colors.azulAtivo} />
                }
              </View>
            </TouchableOpacity>
          </>
        }
      </View>

      {informations}

      <Menu value='selected' play={info.homepage}/>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop:5,
  },
  img:{
    width: '100%',
    height: 300,
    
  },
  filter:{
    height: 300,
    width: '100%',
    position:'absolute',
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