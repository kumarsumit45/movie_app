import SearchBar from "@/components/searchBar";
import AppImages from "@/constants/appImages";
import AppIcons from "@/constants/icons";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "@/components/MovieCard";

const Index = () => {
  const router = useRouter();
  const onPressSearch = () => router.push("/search");

  const {
    data: movies,
    loading: movieLoading,
    error: movieErrors,
  } = useFetch(() =>
    fetchMovies({
      query: '',
    })
  );

  return (
    <SafeAreaView style={styles.conatiner}>
      <Image source={AppImages.bg} style={styles.image} />
      <View style={styles.scrolView}>
        <Image source={AppIcons.logo} style={styles.imgLogo} />

        {movieLoading ? (
          <ActivityIndicator
            size={"large"}
            color={"#0000ff"}
            style={{ marginTop: 40, alignSelf: "center" }}
          />
        ) : movieErrors ? (
          <Text>Error: {movieErrors?.message}</Text>
        ) : (
          <View >
            <SearchBar
              onPress={onPressSearch}
              placeholdeText={"Search for 300+ movies online"}
            />
            <>
              <Text style={styles.latestMovies}>Latest Movies</Text>

              <FlatList
                style={styles.flatlist_container}
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                windowSize={40}
                maxToRenderPerBatch={40}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 16,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                contentContainerStyle={{paddingBottom:170}}
              />
            </>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#0F0D23",
  },
  image: {
    position: "absolute",
    width: "100%",
    zIndex: 0,
  },
  scrolView: {
    flex: 1,
    padding: 5,
    //marginBlockEnd:180 // margin end controller 
  },
  imgLogo: {
    width: 60,
    height: 50,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: "center",
  },
  searchView: {
    height: 50,
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#0Fffff", //#0F0D23
    marginTop: 20,
    flexDirection: "row",
    padding: 10,
    borderWidth: 2,
    borderColor: "#0F0D23",
    paddingHorizontal: 20,
  },
  searchText: {
    marginStart: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "#A8B5DB",
  },
  latestMovies: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    margin: 10,
    marginTop:0,
  },

  flatlist_container: {
    
  },
});

export default Index;
