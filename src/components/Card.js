import { useNavigation } from '@react-navigation/native';
import {Image,StyleSheet,TouchableOpacity} from 'react-native'
import Colors from '../../constants/Colors';

// https://image.tmdb.org/t/p/original  -- to svg
// https://image.tmdb.org/t/p/original  -- to png
// https://image.tmdb.org/t/p/w500      -- to min png

export default function Card({img,id}){
    const navigation = useNavigation()

    function openDatails() {
        console.log('return :'+ id);
        navigation.navigate("Selected")    
    }

    return(
        <TouchableOpacity onPress={openDatails} style={styles.card}>
            <Image source={{uri:'https://image.tmdb.org/t/p/w500'+img}} 
                style={styles.img}
                
            />
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