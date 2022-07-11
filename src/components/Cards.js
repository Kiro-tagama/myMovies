import {View,Text,Image,TouchableOpacity} from 'react-native'

export default function Cards(){
    function openDatails() {
        console.log('return key do selecionado e abre o card dele');
    }
    return(
        <TouchableOpacity onPress={openDatails}>
            <Image src='' />
            <View>
                <Text>name</Text>
                {/* input de checked */}
            </View>
        </TouchableOpacity>
    )
}