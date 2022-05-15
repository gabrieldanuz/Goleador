import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Goleador() {
 return (
   <View style={styles.container}>
     <Text>Fala tu, Craque</Text>
     <View>
        <TextInput 
        style={styles.quantGols}
        keyboardType="numeric"
        placeholder='Marcou quantos gols hoje ?'
        />
                <TextInput 
        style={styles.quantGols}
        keyboardType="numeric"
        placeholder='Pifou quantas ?'
        />
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
  backgroundColor: '#38A69D',
  borderRadius: 8,
}
})