import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import AppIcons from "@/constants/icons";
import { TextInput } from "react-native";

const SearchBar = ({onPress,placeholdeText}) => {
  return (
    <View style={styles.container}>
      <Image source={AppIcons.search} />
      <TextInput 
      placeholder={placeholdeText} //"Search 300+ movies online" 
      style={styles.searchText}
      placeholderTextColor={"#a8b5db"} 
      onPress={onPress}
      onChangeText={()=>{}}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#0F0D23", //#0F0D23
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#0F0D23",
    paddingHorizontal: 20,
  },
  searchText: {
    marginStart: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "#ffffffff",
    paddingTop: 10,
    
  },
});
export default SearchBar;
