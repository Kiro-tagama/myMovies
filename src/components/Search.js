import { useEffect, useState } from 'react';
import {FlatList} from 'react-native'
import { Text, View } from "../../styleSettings/Themed";
import { apiSearch } from '../api/api';
import Card from './Card';


export default function Search(props) {
    const [searchName, setSearchName] = useState([])

    useEffect(async ()=>{
        setSearchName(await apiSearch(props.type,props.search))
    },[props.search])

    console.log(searchName);

    const renderItem = ({ item }) => (
        <Card img={item.logo_path} name={item.title}/>
      );

    return(
        <View style={{paddingHorizontal:20,paddingVertical:10}}>
            <FlatList
                data={searchName.results}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}