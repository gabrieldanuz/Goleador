import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native'

export default function MenuPrincipal() {
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
     <Text style={styles.title}>Seja Bem Vindo, Goleador</Text>
      <Text style={styles.description}>Aqui você pode registrar todos os gols que o Pelé não conseguiu</Text>

      <View>
        <TouchableOpacity style={styles.buttonPartida}
        onPress={() => navigation.navigate('Goleador')}
        >
          <Text style={styles.textButton}>Registrar partida</Text>
        </TouchableOpacity>
      </View>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    padding: 18
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 12,
  },
  buttonPartida: {
    backgroundColor: '#36A69D',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'

  }
})