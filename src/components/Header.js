import { useState } from "react";
import { StyleSheet, FlatList, TextInput,View, Image  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import imgDivider from '../assets/dividerBlue.png'

import { FontAwesome5, Feather } from '@expo/vector-icons';

import { Text, } from "../../styleSettings/Themed";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

import { useNavigation } from "@react-navigation/native";

export default function Header({search,setSearch,type,setType}){

  const navigation = useNavigation()

    function getMovies(params) {
        //fecha o teclado
        //chama os filmes ou talvez nem precise
        console.log('chama os filmes');
    }

    return(
        <View>
        <View style={styles.header}>
            <View style={{flexDirection:"row",marginVertical:5,alignItems:"center"}}>
                <View style={styles.input}>
                    <TextInput
                        style={{flex:1,marginHorizontal:5,fontSize:18,color:Colors.azulAtivo,padding:6}}
                        value={search}
                        placeholder="pesquisa..."
                        placeholderTextColor={'#555'}
                        onChangeText={(txt)=>setSearch(txt)}
                    />
                    { search.length <= 1 ? 
                        null :
                        <TouchableOpacity onPress={()=>setSearch('')} style={{}}>
                            <Feather name="x-circle" size={30} color={Colors.azulAtivo} style={{padding:5}}/>
                        </TouchableOpacity>
                    }
                </View>

                { search.length >= 1 ? 
                    null :
                    <TouchableOpacity onPress={()=>navigation.navigate("Profile")}
                        style={{marginLeft:10}}
                    >
                        <FontAwesome5 name="user-circle" size={42} color={Colors.azulAtivo} style={{marginLeft:5}}/>
                    </TouchableOpacity>
                }
            </View>
            
            <View style={{flexDirection:"row", justifyContent:'space-around',marginTop:10}}>
                <TouchableOpacity onPress={()=>setType('muvie')}>
                    <Text style={styles.op}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setType('tv')}>
                    <Text style={styles.op}>Series</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        <Image source={imgDivider} style={{width:"100%"}}/>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 20,
        paddingTop:40,
    },
    headerAling:{
        backgroundColor:'transparent',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    input:{
        borderRadius:10,
        borderWidth:2,
        borderColor:Colors.azulAtivo,
        flexDirection:"row",
        flex:1,
        alignItems:'center',
    },
    op:{
        textAlign:"center",
        width:100
    }
    
})