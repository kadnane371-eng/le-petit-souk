import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native"

export default  function Index() {

  return (
    <>
    <View style={{ flex:1, backgroundColor: "#FBF5E4",}}>
       <ScrollView>
         <View style={{  flex:1, }} >
      <Image source={require("../assets/images/rest.png")}
      style={{
        width: 430,
        height: 350,
      }} >
      </Image>
     </View>

    <View style={{flex:1,alignItems:"center",backgroundColor: "#FBF5E4" }}>

      <Text style={{fontWeight: "bold", fontSize:32,color:"#635430",marginTop:20,}}>LE PETIT SOUK</Text>

      <Text style={{fontSize:16,marginTop:5,color:"#635430",}}>Restaurant Traditionnel Marocain</Text>

      <Text style={{fontSize:20,marginTop:40,textAlign:"center",color:"#2D6A4F",}}>Bienvenue Chez Le Petit Souk!</Text>
      <Text style={{fontSize:15,marginTop:10,lineHeight:20,color:"#000000",}}>Découvrez l authenticité de la cuisine </Text>
       <Text style={{fontSize:15,marginTop:10,lineHeight:20,color:"#000000",}}>marocaine traditionnelle,préparée avec </Text>
       <Text style={{fontSize:15,marginTop:10,lineHeight:20,color:"#000000",}}>passion et des ingrédients frais. </Text>

    </View>

      <TouchableOpacity style={{alignItems:"center",marginTop:50,}}>
        <View style={{backgroundColor:"#2D6A4F",paddingVertical:15,paddingHorizontal:40,borderRadius:20,width:348,height:60,alignItems:"center",}}>
      <Text style={{ color:"#FFFFFF",fontSize:20,fontWeight:"bold"}}>VOIR LE MENU</Text>
        </View>

     </TouchableOpacity> 

</ScrollView>

    </View>
   
      

      
    </>
 




  )}
