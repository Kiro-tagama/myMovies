import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';

import { FontAwesome5 } from '@expo/vector-icons';

import { Text, View } from "../../../styleSettings/Themed";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

import { useNavigation } from "@react-navigation/native";

export default function GenreLists(){

    return(
        <View style={{flex:1,paddign:2}}>
            {/* se type for filmes */}
            <Text>Em cartaz</Text>
            <FlatList/>
            {/* break line */}
            <Text>top alguma coisa...</Text>
            <FlatList/>

            {/* colocar um seletor de genero??? */}
            <Text>Genero</Text>
            <FlatList/>

            <Text>....</Text>
            <FlatList/>

        </View>
    )
}