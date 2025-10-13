
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.texts}>Working on it .</Text>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0F0D23'
  },
  box:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  texts:{
    fontSize:20,
    color:'#ffffff',
    fontWeight:"500"
  }
})
export default Profile