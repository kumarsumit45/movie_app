
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppImages from '@/constants/appImages'
import AppIcons from '@/constants/icons'

const TabIcon = ({focused , icon ,title}) => {
    if(focused){
  return (
    <ImageBackground source={AppImages.highlight} style={styles.imageBgStyle} >
    <Image source={icon} 
    tintColor={"#585553ff"}
    style={styles.icon}/>
    <Text style={styles.text}>{title}</Text>
    </ImageBackground>
  )
}
  return(
    <View>
        <Image source={icon} tintColor={"#d8e3edff"} />
    </View>
  )
}


const styles = StyleSheet.create({
    icon: {
    width: 20,  
    height: 20,
    tintColor: '#231f1fff',
  },
  text: {
    color: '#000000ff',         
    fontSize: 16,             
    fontWeight: '500',        
    marginLeft: 8,            
  },
  imageBgStyle:{
        flexDirection:"row",
        width:"100%",
        flex:1,
        minWidth:102,
        minHeight:52,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        overflow:"hidden"
    }
})

export default TabIcon