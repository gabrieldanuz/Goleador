import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import {useNavigation} from '@react-navigation/native'

export default function Goleador() {
  const navigation = useNavigation();

 return (
   <View style={styles.container}>
     <Text>Aqui você pode registrar o que você fez na partida</Text>
     <View>
        <TextInput 
        style={styles.quantGols}
        keyboardType="numeric"
        placeholder='Quantidade de gols ?'
        />
        <TextInput 
        style={styles.quantGols}
        keyboardType="numeric"
        placeholder='Assistências ?'
        />
        <TextInput 
        style={styles.quantGols}
        keyboardType="numeric"
        placeholder='Bolas na trave ?'
        />

        <TouchableOpacity style={styles.exit}
        onPress={() => navigation.navigate('MenuPrincipal')}
        >
          <Text style={styles.textExit}>SAIR</Text>
        </TouchableOpacity>
      </View>
   </View>
 );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 10,
},
quantGols: {
  height: 40,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
  backgroundColor: '#36A69D',
  borderRadius: 8,
  color: '#FFF',
},
exit: {
  backgroundColor: '#FF0000',
  width: '100%',
  borderRadius: 4,
  paddingVertical: 8,
  marginTop: 14,
  justifyContent: 'center',
  alignItems: 'center',
},
textExit: {
  color: '#FFF',
  fontSize: 20,
  fontWeight: 'bold',
}
})