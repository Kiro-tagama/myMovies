import React, {useState,useEffect} from 'react';

import { FlatList } from "react-native";
import { Text, View } from "../../styleSettings/Themed";

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

    console.log(cartaz);
    console.log(topRated);
    console.log(genre);

    return(
        <View style={{flex:1,paddign:2}}>
            {/* se type for filmes */}
            <Text>Em cartaz</Text>
            <FlatList/>
            {/* break line */}
            <Text>top alguma coisa...</Text>
            <FlatList/>

            {/* colocar um seletor de genero??? */}
            <Text>
                Genero: 
            </Text>
            <FlatList/>

        </View>
    )
}