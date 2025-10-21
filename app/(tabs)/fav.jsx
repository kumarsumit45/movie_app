import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppImages from "@/constants/appImages";
import AppIcons from "@/constants/icons";
import { Image } from 'react-native';
import { useFavorites } from '@/context/FavoritesContext';
import MovieCard from '@/components/MovieCard';

const Fav = () => {
  const { favorites, loading } = useFavorites();

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={AppImages.bg} style={styles.image} />
        <ActivityIndicator size="large" color="#AB8BFF" style={{ marginTop: 300 }} />
      </SafeAreaView>
    );
  }

  return (
    <>
    <SafeAreaView style={styles.container}>
      <Image source={AppImages.bg} style={styles.image} />

      {favorites.length === 0 ? (
        <View style={styles.box}>
          <Image source={AppIcons.save} style={styles.saveImage}/>
          <Text style={styles.texts}>You haven't saved any movie yet.</Text>
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>My Favorites</Text>
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <MovieCard
                id={item.id}
                poster_path={item.poster_path}
                title={item.title}
                vote_average={item.vote_average}
                release_date={item.release_date}
              />
            )}
          />
        </View>
      )}

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
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
})
export default Fav