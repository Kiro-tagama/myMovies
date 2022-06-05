import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function LoginScreen() {

  const [login, setLogin]=useState(true)

  const [secure, setSecure]=useState(true)

  function SingIn(params) {
    return(
      <View style={styles.infosLogin}>
        <TextInput
        style={styles.input}
        placeholder="Email"
        textContentType="emailAddress"
        />
        <View style={[styles.input,{backgroundColor:'transparent',flexDirection:'row'}]}>
        <TextInput
        placeholder="Senha"
        secureTextEntry={secure}
        style={{fontSize:18,color:'#fff'}}
        />
        <TouchableOpacity>
          <Ionicons name="ios-eye-outline" size={20} color="#fff" />
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.btLogin}>
            <Text style={Fonts.h3}>
              Entrar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  function Create(params) {
    return(
      <View style={styles.infosLogin}>
        <TextInput
        style={styles.input}
        placeholder="Nome"
        />
        <TextInput
        style={styles.input}
        placeholder="Email"
        textContentType="emailAddress"
        />
        <TextInput
        style={styles.input}
        placeholder="Senha"
        />
        <TouchableOpacity>
          <View style={styles.btLogin}>
          <Text style={Fonts.h3}>
            Cadastrar-se
          </Text>
          </View>
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
          <Text style={{textDecorationLine: 'underline'}}>
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
    alignItems:'center',
    paddingVertical:10,
    borderRadius:10,
    marginTop:10
  },
  input:{
    fontSize:18,
    marginVertical:5,
    paddingVertical: 5,
    paddingHorizontal:10,
    borderColor:'#fff',
    borderWidth:2,
    borderRadius:10,
    color:'#fff'
  }

});
