import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppImages from "@/constants/appImages";
import AppIcons from "@/constants/icons";

import { Image } from 'react-native';

const Fav = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <Image source={AppImages.bg} style={styles.image} />
      <View style={styles.box}>

        <Image source={AppIcons.save} style={styles.saveImage}/>
        
        <Text style={styles.texts}>You haven't saved any movie yet .</Text>
      </View>
      
    </SafeAreaView>
    </>
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
    // justifyContent:"center",
    gap:20,
    top:300,
  },
  texts:{
    fontSize:18,
    color:'#ffffff95',
    fontWeight:"500"
  },
  image: {
    position: "absolute",
    width: "100%",
    zIndex: 0,
  },
  saveImage:{
    height:50,
    width:50,
  }
})
export default Fav