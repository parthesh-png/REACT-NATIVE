import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css"


const properties = [
  { id: "1", title: "Modern Villa ", city: "mumbai", price: "$1.2cr" },
  { id: "2", title: "Sea Villa ", city: "mumbai", price: "$9.22cr" },
  { id: "3", title: "Desert Villa ", city: "Banglore", price: "$100.2cr" },
];

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Text> hi there this is parthesh singh </Text>
        <TextInput
          placeholder="search city"
          placeholderTextColor="#999"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 10,
            marginTop: 12,
          }}
        ></TextInput>

        <TouchableOpacity
          onPress={() => alert("searching...")}
          style={{
            backgroundColor: "#2563EB",
            padding: 12,
            borderRadius: 8,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>search</Text>
        </TouchableOpacity>
      </View>

      <FlatList

        //  "FlatList, take this array."
        data={properties}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding:16
         }}
        renderItem={( { item }) => (
          <View 
                style={{
            backgroundColor: "#f9f9f9",
            padding: 12,
            borderRadius: 10,
            marginBottom: 10,
            
          }}
          
          
          >
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ color: "#666" }}>{item.city}</Text>
            <Text style={{ color: "#2563EB" }}>{item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
0