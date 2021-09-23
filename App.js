import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image, Pressable, Alert, ActivityIndicator } from 'react-native'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.text1}>Text 1</Text>
        <Text style={styles.text2}>Text 2</Text>
        <Text style={styles.text3}>Text 3</Text>
      </View>

      <Image
        source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
        style={styles.image} />
      <Image
        source={require('./assets/konexio-logo_1.png')}
        style={styles.image} />

      <View style={{marginBottom: 20, border:1, textAlign: 'center'}}>
        <Pressable onPress={alert}>
          <Text> ok </Text>
        </Pressable>
        <ActivityIndicator color='white' />
      </View>

    </ScrollView>
  )
}
const alert = () => {
  // Alert.alert("this is an alert!")
  window.alert('alert')
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 10
  },
  containerText: {
    backgroundColor: 'white'
  },
  text1: {
    marginVertical: 80,
    fontSize: 30,
  },
  text2: {
    marginVertical: 80,
    textAlign: 'center',
  },
  text3: {
    marginVertical: 80,
    fontWeight: 'bold'
  },
  image: {
    width: 200,
    height: 50,
    marginVertical: 10
  }
})

