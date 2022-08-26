import React, {useState,useEffect} from 'react';

import { StyleSheet,FlatList,ScrollView } from "react-native";
import { Text, View } from "../../styleSettings/Themed";

import { api } from '../api/api';
import Card from './Card';

export default function CategoryList({type}){
    const [cartaz, setCartaz]= useState([])
    const [topRated, setTopRated]= useState([])
    const [genre, setGenre]= useState([])

    const [typeGenre, setTypeGenre]= useState('')

    useEffect(async()=>{
        setCartaz(await api('movie/now_playing'))
        setTopRated(await api(type+'/top_rated'))
        setGenre(await api(`${typeGenre}/movie/list`))
    }, [type])


    const renderItem = ({ item }) => (
        <View style={{margin:10}}>
        <Card img={item.poster_path} id={item.id} />
        </View>
    );

    const szList='100%'

    return(
        <View style={{flex:1,paddign:2,marginVertical:10}}>
        <ScrollView>

            {/* se type for filmes */}
            <Text style={styles.text}>Em cartaz</Text>
            <FlatList
                data={cartaz.results}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{height:szList}}
            />
            {/* break line */}
            <Text style={styles.text}>Top ranqueado</Text>
            <FlatList
                data={topRated.results}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{height:szList}}
            />
            {/* colocar um seletor de genero??? */}
            {/* <Text style={styles.text}>
                Genero:   
                <Text style={{color:'#07f'}}> - Picker -</Text>
            </Text>
            <FlatList
                data={genre.results}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{height:szList}}
            /> */}

        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        marginHorizontal:15,
        marginTop:10
    },
    list:{
        
    }
})