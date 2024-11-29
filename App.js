import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
     return (
          <View className="flex justify-center items-center h-full">
               <Text className="text-4xl bg-blue-300">Welcome to mi app</Text>
               <StatusBar style="auto" />
          </View>
     );
}
