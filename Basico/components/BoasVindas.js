import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';

function BoasVindas(props) {

  const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
    const [name, setName] = useState('');
    const [subname, setSubname] = useState('');

    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    function mostrarSaudacao() {
        if(name !== '' && subname !== ''){
            setMostrarMensagem(true);
        }else{
            Alert.alert([ 'Favor preencher.',
                         'Os campos não podem ficar vazios.'
            ],           {text: 'OK'});
        }
    }

    function clear() {
        setName('');
        setSubname('');
        setMostrarMensagem(false);
    }

  return (
    <View style={styles.container}>
        <TextInput 
            placeholder="Nome:"
            style={styles.input}
            value={name}
            onChangeText={value => setName(value)} 
        />
        <TextInput 
            placeholder="Sobrenome:"
            style={styles.input}
            value={subname}
            onChangeText={value => setSubname(value)} 
        />
        <View style={styles.buttonContainer}>
            <Button onPress={mostrarSaudacao} color="#10ad10" title="ok"  />
        </View>
        <View>
         <Button onPress={clear} color="#10ad10" title="limpar"  />
        </View>
      {mostrarMensagem &&(
      <>
         <Text style={styles.texto}>Olá {name} {subname} {props.saudacao}</Text>
         <Text style={styles.texto}>{mensagem}</Text>
      </>
 )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#000000',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  texto: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",
  },
  input: {
    borderColor: '#fff',
    fontSize: 18,  
    height: 40,
      padding: 5,
      backgroundColor: '#fff',
      borderRadius: 8, 
      marginBottom: 20,  
  },
  buttonContainer: {
      marginBottom: 10,
  } 
});
export default BoasVindas;
