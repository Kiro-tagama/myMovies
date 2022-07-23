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
            <Image source={{uri:'https://image.tmdb.org/t/p/w500'+img}} 
                style={styles.img}
                
            />
            {/* <Text>{name}</Text> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        width: 120,
    },
    img:{
        width:'100%',
        height:180,
        borderRadius:10,
        borderWidth:.2,
        borderColor:Colors.azulAtivo
    },
    txt:{
        fontSize:12,
    }
})