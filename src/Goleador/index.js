import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Goleador() {
 return (
   <View style={styles.container}>
     <Text>Fala tu, Craque</Text>
     <View>
        <Text style={styles.textGol}>Brocou quantos hoje?</Text>
      </View>
   </View>
 );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
textGol: {
  fontSize: 18,
  margin: 10,
  alignItems: 'center',
  textAlign: 'center',
}
})