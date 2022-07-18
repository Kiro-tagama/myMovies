import React, {useState,useEffect} from 'react';

import { StyleSheet,FlatList } from "react-native";
import { Text, View } from "../../styleSettings/Themed";

import { api } from '../api/api';
import Card from './Card';

export default function CategoryList(){
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
    const renderItem = ({ item }) => (
        <Card img={item.logo_path} name={item.name}/>
    );

    return(
        <View style={{flex:1,paddign:2,marginVertical:10}}>
            {/* se type for filmes */}
            <Text style={styles.text}>Em cartaz</Text>
            <FlatList
                data={cartaz}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />
            {/* break line */}
            <Text style={styles.text}>Top ranqueado</Text>
            <FlatList
                data={topRated}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />

            {/* colocar um seletor de genero??? */}
            <Text style={styles.text}>
                Genero: 
                <Text style={{color:'#07f'}}>- Picker -</Text>
            </Text>
            <FlatList
                data={genre}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        marginHorizontal:15
    }
})