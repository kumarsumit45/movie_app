import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import AppImages from '@/constants/appImages'
import AppIcons from '@/constants/icons'

const MovieCard = ({id,poster_path,title,vote_average,release_date}) => {
  return (
    
    <Link href={`/movie/${id}`} asChild>
        <TouchableOpacity style={styles.cardCon}>
            <Image source={{
                uri: poster_path 
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://placehold.co/600*400/1a1a1a/ffffff.png`
            }}
            resizeMode="cover"
            style={styles.card}
            />
            <Text numberOfLines={1} style={styles.flatList_Text}>{title}</Text>
            <View style={styles.ratingContainer}>
                <Image source={AppIcons.star} style={styles.starimg}/>
                <Text style={styles.rating}>{Math.round(vote_average/2)}</Text>
            </View>
            <View style={styles.yearContainer}>
                <Text style={styles.rating}>{release_date?.split('-')[0]}</Text>
                <Text style={styles.rating}>Movie</Text>
            </View>
        </TouchableOpacity>
    </Link>
     
       
     
  )
}


const styles = StyleSheet.create({
    flatList_Text:{
    color:"white",
    fontSize:12,
    overflow:"hidden",
    fontWeight:"600",
    marginTop:4
  },
  card:{
    width:"100%",
    height:208,
    borderRadius:8,
    marginTop:2
  },
  cardCon:{
    width: '30%'
  },
  rating:{
    color:"#fff",
    fontSize:12,
    fontWeight:"600"
  },
  ratingContainer :{
    flexDirection:"row", 
    alignItems:"center",
    marginTop:4,
    gap:3
},
starimg:{
    width:15,
    height:15,
},
yearContainer:{
    marginTop:4,
    flexDirection:"row",
    justifyContent:"space-between"
}

})
export default MovieCard