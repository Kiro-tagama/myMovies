import { useEffect, useState } from 'react';
import {FlatList} from 'react-native'
import { GridList } from 'react-native-ui-lib';
import { Text, View } from "../../styleSettings/Themed";
import { apiSearch } from '../api/api';
import Card from './Card';


export default function Search({type,search}) {
    const [searchName, setSearchName] = useState([])

    useEffect(async ()=>{
        setSearchName(await apiSearch(type,search))
    },[type,search])

    const renderItem = ({ item }) => (
        <Card img={item.poster_path} id={item.id}/>
    );

    return(
        <View style={{paddingHorizontal:15,paddingVertical:10}}>
            <GridList
                data={searchName.results}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                containerWidth={380}  // mudar esse tamanho fixo
                itemSpacing={10}
            />
        </View>
    )
}