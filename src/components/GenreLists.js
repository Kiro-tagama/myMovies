import { FlatList } from "react-native";

import { Text, View } from "../../styleSettings/Themed";

export default function GenreLists(){

    return(
        <View style={{flex:1,paddign:2}}>
            {/* se type for filmes */}
            <Text>Em cartaz</Text>
            <FlatList/>
            {/* break line */}
            <Text>top alguma coisa...</Text>
            <FlatList/>

            {/* colocar um seletor de genero??? */}
            <Text>Genero</Text>
            <FlatList/>

            <Text>....</Text>
            <FlatList/>

        </View>
    )
}