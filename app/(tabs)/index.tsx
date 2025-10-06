import SearchBar from "@/components/searchBar";
import AppImages from "@/constants/appImages";
import AppIcons from "@/constants/icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const router = useRouter()
   const onPressSearch = ()=> (
    router.push("/(tabs)/search")
   )
  return (
    <SafeAreaView style={styles.conatiner}>
      <Image source={AppImages.bg} style={styles.image} />
      <ScrollView 
      style={styles.scrolView}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        minHeight:"100%",
        
      }}
      >
        <Image source={AppIcons.logo} style={styles.imgLogo} />

        <View>
           <SearchBar 
           onPress={onPressSearch}
           placeholdeText= {"Search a movie"}
           />
        </View>
         
        

      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  conatiner: {
    flex:1,
    backgroundColor:"#0F0D23"  
  },
  image:{
    position:"absolute",
    width:"100%",
    zIndex:0
  },
  scrolView:{
    flex:1,
    padding:5,
    
  },
  imgLogo:{
    width:60,
    height:50,
    marginTop:10,
    marginBottom:5,
    alignSelf:"center"
  },
  searchView:{
    height:50,
    width:"100%",
    borderRadius:100,
    backgroundColor:"#0Fffff", //#0F0D23
    marginTop:20, 
    flexDirection:"row",
    // justifyContent:"flex-start",
    // alignItems:"center",
    padding:10,
    borderWidth:2,
    borderColor:"#0F0D23",
    paddingHorizontal:20
  },
  searchText:{
    marginStart:10,
    fontSize:14,
    fontWeight:"500",
    color:"#A8B5DB"
  }
});

export default Index;
