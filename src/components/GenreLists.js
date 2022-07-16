import React, {useState,useEffect} from 'react';

import { StyleSheet,FlatList } from "react-native";
import { Text, View } from "../../styleSettings/Themed";

import { api } from '../api/api';
import Card from './Card';

export default function GenreLists(){
    const [cartaz, setCartaz]= useState([])
    const [topRated, setTopRated]= useState([])
    const [genre, setGenre]= useState([])

    const [typeGenre, setTypeGenre]= useState('')

    useEffect(()=>{
        setCartaz(api())
        setTopRated(api('top_rated'))
        setGenre(api(`${typeGenre}/movie/list`))
    }, [])

    // console.log(api('genre/movie/list'));

    return(
        <View style={{flex:1,paddign:2,marginVertical:10}}>
            {/* se type for filmes */}
            <Text style={styles.text}>Em cartaz</Text>
            <FlatList
                data={cartaz}
                renderItem={<Card/>}
                keyExtractor={item => item.id}
            />
            {/* break line */}
            <Text style={styles.text}>Top ranqueado</Text>
            <FlatList
                data={topRated}
                renderItem={<Card/>}
                keyExtractor={item => item.id}
            />

            {/* colocar um seletor de genero??? */}
            <Text style={styles.text}>
                Genero: 
            </Text>
            <FlatList
                data={genre}
                renderItem={<Card/>}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        marginHorizontal:15
    }
})