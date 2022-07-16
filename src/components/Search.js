import { useEffect, useState } from 'react';
import {FlatList} from 'react-native'
import { Text, View } from "../../styleSettings/Themed";
import { apiSearch } from '../api/api';
import Card from './Card';


export default function Search(props) {
    const [searchName, setSearchName] = useState([])

    useEffect(async ()=>{
        setSearchName(await apiSearch(props.search))
    })

    console.log(searchName);

    const renderItem = ({ item }) => (
        <Text >{item}</Text>
      );

    return(
        <View style={{paddingHorizontal:20,paddingVertical:5}}>
            <Text>" {props.search} "</Text>
            <FlatList
                data={searchName}
                renderItem={renderItem}
                // keyExtractor={item => item.results.id}
            />
        </View>
    )
}