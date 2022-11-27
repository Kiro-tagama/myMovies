import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { GridList } from 'react-native-ui-lib';
import { View } from "../../styleSettings/Themed";
import { apiSearch } from '../api/api';
import Card from './Card';


export default function Search({type,search}) {
    const [searchName, setSearchName] = useState([])

    const window= useWindowDimensions()

    const myFunc = async ()=>setSearchName(await apiSearch(type,search))

    useEffect(()=>{
        myFunc()
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
                containerWidth={window.width-30}  // mudar esse tamanho fixo
                itemSpacing={10}
            />
        </View>
    )
}