import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Text> hi there this is parthesh singh </Text>
        <TextInput
          placeholder="search city"
          placeholderTextColor="#999"
          style={{
            borderWidth:1,
            borderColor:"#ddd",
            borderRadius:8,
            padding:10,
            marginTop:12
          }}
        ></TextInput>


        <TouchableOpacity
        onPress={()=>alert("searching...")}
        style={{
          backgroundColor:"#2563EB",
          padding:12,
          borderRadius:8,
          marginTop:10,
          alignItems:"center"
        }}>

          <Text style={{color:"white",fontWeight:"bold"}}
          >search</Text>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
