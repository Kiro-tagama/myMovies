import { StyleSheet, TouchableOpacity, Image } from "react-native"
import { View, Text } from "../../styleSettings/Themed";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { FontAwesome5 } from '@expo/vector-icons';

import imgDivider from '../assets/dividerBlue.png'


export default function Menu(){

  return(
    <View>
    <Image source={imgDivider} style={{width:"100%",transform: [{ rotate: '180deg' }]}}/>
    <View style={styles.menu}>
      <TouchableOpacity>
        <View style={[styles.opcoes,{borderTopLeftRadius:10,borderBottomLeftRadius:10}]}>
          <Text></Text>
          <Text>Todos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity >
        <View style={styles.opcoes}>
          <Text>
            <FontAwesome5 name="random" size={30}/>
          </Text>
          <Text>Aleatorio</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[styles.opcoes,{borderTopRightRadius:10,borderBottomRightRadius:10}]}>
          <Text></Text>
          <Text>Já assisti</Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menu:{
    flexDirection:'row',
    justifyContent:"space-around",
    marginBottom:5
  },
  opcoes:{
    alignItems:'center',
    width: 110,
    paddingBottom: 10,
    flexDirection:'column'
  },
});
