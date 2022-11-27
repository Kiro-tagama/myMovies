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

    function options() {
        return(
            <View style={{flexDirection:"row", justifyContent:'space-around',marginTop:10}}>
                {/* <TouchableOpacity onPress={()=>{setType('???')}}>
                    <Text style={[styles.op,{color:anime}]}>Animes</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={()=>{setType('movie')}}>
                    { type == 'movie' ?
                    <Text style={[styles.op,{color:Colors.azulAtivo}]}>Filmes</Text>:
                    <Text style={[styles.op]}>Filmes</Text>}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setType('tv')}}>
                    { type == 'tv' ?
                    <Text style={[styles.op,{color:Colors.azulAtivo}]}>Series</Text>:
                    <Text style={[styles.op]}>Series</Text>}
                </TouchableOpacity>
            </View>
        )
        
    }


    return(
        <View>
        <View style={styles.header}>
            <View style={{flexDirection:"row",marginVertical:5,alignItems:"center"}}>
                <View style={styles.input}>
                    <TextInput
                        style={{flex:1,marginHorizontal:5,fontSize:18,color:Colors.azulAtivo,padding:5}}
                        value={search}
                        placeholder="pesquisa..."
                        placeholderTextColor={'#555'}
                        onChangeText={(txt)=>setSearch(txt)}
                    />
                    
                    { search.length == 0 ? 
                        null :
                        <TouchableOpacity onPress={()=>setSearch('')}>
                            <Feather name="x-circle" size={25} style={{padding:5,paddingVertical:2,color:Colors.azulAtivo}}/>
                        </TouchableOpacity>
                    }
                </View>

                { search.length == 0 ? 
                    <TouchableOpacity onPress={()=>navigation.navigate("Profile")}
                    style={{marginLeft:10}}
                    >
                        <FontAwesome5 name="user-circle" size={42} color={Colors.azulAtivo} style={{marginLeft:5}}/>
                    </TouchableOpacity>
                    :null 
                }
            </View>

            {options()}
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
        width:100,
        fontSize:Fonts.h3.fontSize,
        fontWeight:'bold'
    }
})