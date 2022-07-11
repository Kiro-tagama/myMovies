import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';

import { FontAwesome5 } from '@expo/vector-icons';

import { Text, View } from "../../../styleSettings/Themed";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

import { useNavigation } from "@react-navigation/native";

export default function Header(){
    const [search, setSearch] = useState('')

    function getMovies(params) {
        return 0
    }

    return(
        <View>
            <View>
                <View style={{borderRadius:15,borderWidth:2,borderColor:Colors.azulAtivo}}>
                { search.length >= 1 ? 
                    null :
                    <TouchableOpacity onPress={()=>setSearch('')}>
                        <Feather name="x-circle" size={24} color={Colors.azulAtivo} />
                    </TouchableOpacity>
                }
                    <TextInput
                    
                    />
                    <TouchableOpacity onPress={getMovies}>
                        <Text style={{backgroundColor:Colors.azulAtivo,borderBottomEndRadius:15}}>
                        <Feather name="search" size={24}/>
                        </Text>
                    </TouchableOpacity>
                </View>

                { search.length >= 1 ? 
                    null :
                    <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                        <Text>
                        <FontAwesome5 name="user-circle" size={35} />
                        </Text>
                    </TouchableOpacity>
                }
            </View>
            { search.length >= 1 ? 
                null :
                <View>
                    <TouchableOpacity><Text>Filmes</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Filmes</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Filmes</Text></TouchableOpacity>
                </View>
            }

        </View>
    )
}


const styles = StyleSheet.create({
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
})