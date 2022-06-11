import { useContext, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

import { AuthContext } from "../../firebaseConfig/authFirebase";

export default function LoginScreen() {

  const [type ,setType]= useState(true)
  
  function login(params) {
    
    const [nome ,setNome]= useState('')
    const [email ,setEmail]= useState('')
    const [password ,setPassword]= useState('')

    const [secure, setSecure]=useState(true)

    const {signIn,signUp}= useContext(AuthContext)

    function handleLogin(params) {
      if (type == true) {
        console.log(signIn, email);
      } else {
        return console.log('signUp');
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
        textContentType="emailAddress"
        value={email}
        onChangeText={(texto)=>setEmail(texto)}
        />
        <View style={[styles.input,{backgroundColor:'transparent',flexDirection:'row',alignItems:'center'}]}>
        <TextInput
        placeholder="Senha"
        secureTextEntry={secure}
        style={{fontSize:18,color:'#fff',width:'92%'}}
        value={password}
        onChangeText={(texto)=>setPassword(texto)}
        />
        <TouchableOpacity onPress={()=>setSecure(!secure)}>
          {secure?
            <Ionicons name="ios-eye-outline" size={20} color="#fff" style={{marginLeft:5}}/>:
            <Ionicons name="ios-eye-off-outline" size={20} color="#fff" style={{marginLeft:5}}/>
          }
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.btLogin}>
            <Text style={Fonts.h3}>
              {type?
                "Entrar" :
                "Cadastrar"
              }
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={[styles.container,{paddingTop:30}]}>
      <View style={styles.containerIntro}>
        <Text style={[Fonts.h1,{color:Colors.azulAtivo}]}>myMovies</Text>
        <Text>Intro</Text>
        <MaterialCommunityIcons name="movie-open-outline" size={250} color={Colors.azulAtivo} style={{textAlign:'center',marginTop:100,opacity:.3}}/>
      </View>
      <View style={styles.containerLogin}>
        <Text style={Fonts.h2}>{type? "Login" : "Cadastro" }</Text>
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
    borderColor:'#fff8',
    borderWidth:1.5,
    borderRadius:10,
    color:'#fff'
  }

});
