import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import useFetch from '@/services/useFetch'
import {fetchMoviesDetails} from '@/services/api'

const MovieDetails = () => {
    const { id } =useLocalSearchParams();

    const { data : movies ,loading} = useFetch(()=> fetchMoviesDetails(id))


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{
        paddingBottom: 80 
      }}>
        <View>
            <Image source={{
                uri:`https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                }}
                style={styles.image}
                resizeMode="stretch"
            />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#0F0D23",
        flex:1
    },
    image:{
        width:"100%",
        height:550,

    }
})
export default MovieDetails