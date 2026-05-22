import { menu } from "../data/menu";
import { router } from "expo-router";
import {
 ScrollView,
 View,
 Text,
 TouchableOpacity,
 Image,
} from "react-native";



export default function Menu() {
  return (
    <>
 <View style={{ flex: 1, backgroundColor: "#FBF5E4" }}>
      <ScrollView>
 <View style={{ backgroundColor: "#2D6A4F",paddingTop: 60, paddingHorizontal: 20,borderBottomLeftRadius: 30, borderBottomRightRadius: 30, }}>
      <TouchableOpacity onPress={() => router.push("/")}>
         <Text style={{fontSize: 30,fontWeight: "bold",textAlign: "center", marginTop: 10, color: "#FFFFFF",}}>
              MENU DU JOUR </Text>
      </TouchableOpacity>
</View>
  {menu.map((item) => (
     <View key={item.id}
      style={{flexDirection: "row", backgroundColor: "#FFFFFF", marginHorizontal: 20, marginTop: 20, borderRadius: 20, padding: 10, alignItems: "center" }} >
     <Image source={item.image}
         style={{width: 95,height: 95, borderRadius: 15,}}/>
        
      <View style={{flex:1,marginLeft:15,}}>
        <Text style ={{fontSize:24,fontWeight:"bold",color:"#635430",}}>{item.name}</Text>
        <Text style={{fontSize:20,fontWeight:"200",color:"#635430"}}>{item.category}</Text>
      </View>


          </View>
          ))}

        </ScrollView>
      </View>
    </>
  );
}
