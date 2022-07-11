import { useState } from "react";
import { StyleSheet, FlatList, TextInput,View  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { FontAwesome5, Feather } from '@expo/vector-icons';

import { Text, } from "../../styleSettings/Themed";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

import { useNavigation } from "@react-navigation/native";

export default function Header(){
    const [search, setSearch] = useState('a')
    const [type, setType] = useState('Filme')  // filme,serie,anime

  const navigation = useNavigation()

    function getMovies(params) {
        //fecha o teclado
        //chama os filmes ou talvez nem precise
        console.log('chama os filmes');
    }

    return(
        <View style={styles.header}>
            <View style={{flexDirection:"row"}}>
                <View style={{borderRadius:15,borderWidth:2,borderColor:Colors.azulAtivo,flexDirection:"row"}}>
                { search.length <= 1 ? 
                    null :
                    <TouchableOpacity onPress={()=>setSearch('')} style={styles.pad}>
                        <Feather name="x-circle" size={24} color={Colors.azulAtivo} />
                    </TouchableOpacity>
                }
                    <TextInput
                        style={styles.pad}
                    />
                    <TouchableOpacity onPress={getMovies}>
                        <Text style={{backgroundColor:Colors.azulAtivo,borderBottomEndRadius:15,padding:2}}>
                            <Feather name="search" size={24}/>
                        </Text>
                    </TouchableOpacity>
                </View>

                { search.length >= 1 ? 
                    null :
                    <TouchableOpacity onPress={()=>navigation.navigate("Profile")}
                        style={{marginLeft:10}}
                    >
                        <Text>
                            <FontAwesome5 name="user-circle" size={35} />
                        </Text>
                    </TouchableOpacity>
                }
            </View>
            { search.length >= 1 ? 
                null :
                <View style={{flexDirection:"row", justifyContent:'center'}}>
                    <TouchableOpacity>
                        <Text style={styles.pad}>Filmes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.pad}>Filmes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.pad}>Filmes</Text>
                    </TouchableOpacity>
                </View>
            }

        </View>
    )
}


const styles = StyleSheet.create({
    header:{
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
    pad:{
        padding:2
    }
})