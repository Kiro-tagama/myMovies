import {Image,StyleSheet,TouchableOpacity} from 'react-native'
import Colors from '../../constants/Colors';
import { Text, View } from "../../styleSettings/Themed";

// https://image.tmdb.org/t/p/original  -- to svg
// https://image.tmdb.org/t/p/original  -- to png
// https://image.tmdb.org/t/p/w500      -- to min png

export default function Card({img,name}){
    function openDatails() {
        console.log('return key do selecionado e abre o card dele');
    }
    return(
        <TouchableOpacity onPress={openDatails} style={styles.card}>
            <Image src={"https://image.tmdb.org/t/p/w500"+img} 
                style={styles.img}
            />
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:Colors.azulAtivo,
        width: 120,
        borderRadius:15
    },
    img:{
        width:'100%',
        height:100
    },
    txt:{
        fontSize:12,
    }
})