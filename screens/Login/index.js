import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function LoginScreen() {

  const [login, setLogin]=useState(true)

  function SingIn(params) {
    return(
      <View style={styles.infosLogin}>
        <Text>logar</Text>
        <TouchableOpacity>
          <Text style={[Fonts.h3,styles.btLogin]}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  function Create(params) {
    return(
      <View style={styles.infosLogin}>
        <Text>criar</Text>
        <TouchableOpacity>
          <Text style={[Fonts.h3,styles.btLogin]}>
            Cadastrar-se
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={[styles.container,{paddingTop:30}]}>
      {/* icon */}
      <View style={styles.containerIntro}>
        <Text style={[Fonts.h1,{color:Colors.azulAtivo}]}>myMovies</Text>
        <Text>Intro</Text>
      </View>
      <View style={styles.containerLogin}>
        <Text style={Fonts.h2}>{login? "Login" : "Cadastro" }</Text>
        {login? SingIn() : Create()}
        <TouchableOpacity onPress={()=>setLogin(!login)}>
          <Text>
            {login?
              "Não tenho uma conta" :
              "Já tenho uma conta"
            }
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerIntro:{
    flex: 1,
    paddingHorizontal:20
  },
  containerLogin:{
    backgroundColor: Colors.azulAtivo,
    padding: 20,
    borderTopStartRadius:15,
    borderTopEndRadius:15,
  },
  infosLogin:{
    backgroundColor:'transparent',
    paddingVertical:10
  },
  btLogin:{
    textAlign:'center',
    backgroundColor:'#f00',
    paddingVertical:10,
    borderRadius:10,
    marginTop:10
  }
});
