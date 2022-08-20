import { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Image , TextInput} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { Text, View} from "../../../styleSettings/Themed";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

import {FirebaseContext} from "../../firebase/firebaseContext";

import imgDivider from '../../assets/dividerBlue.png'

export default function LoginScreen() {

  const [type ,setType]= useState(true)

  const {signIn,signUp} = useContext(FirebaseContext)
  
  function login(params) {
    
    const [nome ,setNome]= useState('')
    const [email ,setEmail]= useState('')
    const [password ,setPassword]= useState('')

    const [secure, setSecure]=useState(true)

    function handleLogin(params) {
      if (type == true) {
        return signIn(email,password)
      }else{
        return signUp(email,password,nome)
      }

    }

    return(
      <View style={styles.infosLogin}>
        {!type ?
          <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(texto)=>setNome(texto)}
          /> :
          null
        }
        <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Colors.azulAtivo+"55"}
        textContentType="emailAddress"
        value={email}
        onChangeText={(texto)=>setEmail(texto)}
        />
        <View style={[styles.input,{backgroundColor:'transparent',flexDirection:'row',alignItems:'center'}]}>
        <TextInput
        placeholder="Senha"
        secureTextEntry={secure}
        placeholderTextColor={Colors.azulAtivo+"55"}
        style={{fontSize:18,flex:1,color:Colors.azulAtivo}}
        value={password}
        onChangeText={(texto)=>setPassword(texto)}
        />
        <TouchableOpacity onPress={()=>setSecure(!secure)}>
          {secure?
            <Ionicons name="ios-eye-outline" size={20} color={Colors.azulAtivo} style={{marginLeft:5}}/>:
            <Ionicons name="ios-eye-off-outline" size={20} color={Colors.azulAtivo} style={{marginLeft:5}}/>
          }
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogin} >
          <View style={styles.btLogin}>
            <Text style={Fonts.h3}>
              {type?
                "Entrar" :
                "Cadastrar"
              }
            </Text>
          </View>
        </TouchableOpacity>
        <StatusBar/>
      </View>
    )
  }

  const txtIntro='App de sugestão de filmes'

  return (
    <View style={[styles.container,{paddingTop:30}]}>
      <View style={styles.containerIntro}>
        <Text style={[Fonts.h1,{color:Colors.azulAtivo}]}>myMovies</Text>
        <Text>{txtIntro}</Text>
        <MaterialCommunityIcons name="movie-open-outline" size={250} color={Colors.azulAtivo} style={{textAlign:'center',marginTop:75,opacity:.3}}/>
      </View>
      <View>
        <Image source={imgDivider} style={{width:"100%",transform: [{ rotate: '180deg' }]}}/>
        <View style={styles.containerLogin}>
          <Text style={[Fonts.h2,{textAlign:'right'}]}>{type? "Login" : "Cadastro" }</Text>
          {login()}
          <TouchableOpacity onPress={()=>setType(!type)}>
            <Text style={{textDecorationLine: 'underline'}}>
              {type?
                "Não tenho uma conta" :
                "Já tenho uma conta"
              }
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerIntro:{
    flex: 1,
    paddingHorizontal:20,
  },
  containerLogin:{
    padding: 20,
    paddingTop:5,
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
    marginTop:10,
    backgroundColor:Colors.azulAtivo
  },
  input:{
    fontSize:18,
    marginVertical:5,
    paddingVertical: 5,
    paddingHorizontal:10,
    borderColor:Colors.azulAtivo,
    borderWidth:1.5,
    borderRadius:10,
    color: Colors.azulAtivo,
  }

});
