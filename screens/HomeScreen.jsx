import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity } from "react-native";
import jwtDecode from "jwt-decode";
import { useLayoutEffect } from "react";
import { useAuth } from "../services/auth";

export default function HomeScreen() {
  const { token } = useAuth();
  console.log(token);
  const authToken = token;
  // Decode the token to access user information
  const decodedToken = jwtDecode(authToken);
  console.log(decodedToken);

  // Access the user's username
  const username = decodedToken.username;

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaProvider className="flex-1 bg-white pt-12 pl-6">
      <View className="flex-row pt-4">
        <Image
          source={require("../assets/avatar.png")}
          className="h-10 w-10 rounded-full"
        />
        <Text className="text-xl font-semibold">Hi, {username}</Text>
        <Image source={require("../assets/notificaion.svg")} />
      </View>
      <View className="p-4 mt-4 bg-[#0c2b97] h-48 w-[95%] rounded-lg">
        <Text className="text-white text-lg">Wallet Balance</Text>
        <Text className="text-white text-xl font-bold">₦0.00</Text>
        <TouchableOpacity className="mt-12 bg-[#6b83d8] h-9 rounded-full">
          <Text className="text-white p-1 text-center text-base">
            + Sync your account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
