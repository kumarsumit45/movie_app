import MovieCard from "@/components/MovieCard";
import SearchBar from '@/components/searchBar';
import AppImage from '@/constants/appImages';
import AppIcons from '@/constants/icons';
import { fetchMovies } from "@/services/api";
import useFetch from '@/services/useFetch';
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  
  const [searchQuery,setSearchQuery] = useState('')

   const {
    data: movies,
    loading: movieLoading,
    error: movieErrors,
    refetch : loadMovies,reset,
  } = useFetch(() =>
    fetchMovies({
      query: searchQuery,
    }),false
  );

  useEffect(()=>{
    const timeoutId = setTimeout( async()=>{
      if(searchQuery.trim()){
        await loadMovies();
      }else {
        reset()
      }
  },500);

  return ()=> clearTimeout(timeoutId);

},[searchQuery])

const sortedMovies = movies?.sort((a, b) => {
    const dateA = new Date(a.release_date || '1900-01-01');
    const dateB = new Date(b.release_date || '2026-01-01');
    return dateB - dateA; 
  });

  return (
     <SafeAreaView style={styles.safe_container}>
      <Image source={AppImage.bg} style={styles.bgImage} resizeMode="cover" />

      <View style={styles.container}>
       
        <FlatList 
           data={sortedMovies}
           renderItem={({ item })=> <MovieCard {...item}/> }
           keyExtractor={(item)=> item.id.toString()}
           numColumns={3}
           columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 16,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
           contentContainerStyle={{paddingBottom:100}}
           ListHeaderComponent={
            <>
            <View>
              <Image source={AppIcons.logo} style={styles.logoImage}/>
            </View>

            <View>
                <SearchBar 
                placeholdeText={"Search movie .."} 
                value={searchQuery}
                onChangeText= {(text)=> setSearchQuery(text)}
                onPress={()=>null}
                
                />
            </View>
            {
              movieLoading && (
                <ActivityIndicator size={"large"} color={'#0000ff'} style={{marginVertical:12}} />
              )
            }
            {
              movieErrors && (
                <Text style={styles.error_text}> Error : {movieErrors.message}</Text>
              )
            }
            {
              !movieLoading && !movieErrors && searchQuery.trim() && movies?.length > 0 && (
                <Text style={styles.search_Text}> 
                  Search Results for {' '}
                  <Text style={styles.search_Text2}> 
                    {searchQuery} 
                  </Text>
                
                </Text>
              )
            }
            </>
           }
           ListEmptyComponent={
            !movieLoading && !movieErrors ? (
              <View>
                <Text style={styles.emptyListtext}>{searchQuery.trim() ? 'No movies found': 'search for a movie'}</Text>
              </View>
            ):null
           }
        />
        
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  safe_container:{
    flex:1,
    backgroundColor:"#0F0D23",
    
  },
  bgImage:{
    width:"100%",
    position:"absolute",
    zIndex:0,
  },
  container:{
    flex: 1,
    padding: 5,
  },
  logoImage:{
    width: 60,
    height: 50,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: "center",
  },
  error_text:{
    color: '#ef4444',        
    paddingHorizontal: 20,  
    marginVertical: 12, 
  },
  search_Text :{
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "500",
    marginBottom: 10,
    marginTop:-5
  },
  search_Text2 :{
    fontSize: 18,
    color: "#b5acacff",
    fontWeight: "bold", 
  },
  emptyListtext:{
    fontSize:15,
    fontWeight:"400",
    fontStyle:"normal",
    color:"#a09696ff",
    alignSelf:"center",
    marginTop:30
  }
})


export default Search

