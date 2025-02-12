import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity } from "react-native";
import jwtDecode from "jwt-decode";
import { useLayoutEffect } from "react";
import { useAuth } from "../services/auth";
import { Feather } from "@expo/vector-icons";

export default function HomeScreen() {
  // const { token } = useAuth();
  // const authToken = token;
  // // Decode the token to access user information
  // const decodedToken = jwtDecode(authToken);
  //
  // // Access the user's username
  // const username = decodedToken.username;

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="flex-1 bg-white pt-2 pl-6">
      <View className="flex-row pt-2 gap-2 items-center">
        <Image
          source={require("../assets/avatar.png")}
          className="h-10 w-10 rounded-full"
        />
        <Text className="text-xl font-semibold">Hi, Oluwaseun</Text>
        <Image source={require("../assets/logo/Bell.png")} />
      </View>
      <View className="p-4 mt-4 bg-[#0c2b97] h-48 w-[95%] rounded-lg">
        <Text className="text-white text-lg">Wallet Balance</Text>
        <Text className="text-white text-xl font-bold">₦0.00</Text>
        <View className="flex-row gap-4">
          <TouchableOpacity className="bg-white flex-row rounded-lg w-20 gap-1">
            <Feather name="send" size={24} color="#0c2b97" />
            <Text>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white flex-row rounded-lg gap-1 w-24">
            <Feather name="send" size={24} color="#0c2b97" />
            <Text>Recieve</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="mt-12 bg-[#6b83d8] h-9 rounded-full">
          <Text className="text-white p-1 text-center text-base">
            + Sync your account
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between p-4 mt-4">
        <Text className="text-lg font-semibold">Quick actions</Text>
        <Text className="font-medium pr-4">View all</Text>
      </View>
      <View className="flex-row justify-around mt-4">
        <View>
          <Image
            source={require("../assets/airtime.png")}
            className="h-16 w-16"
          />
          <Text className="font-medium mt-2">Buy airtime</Text>
        </View>
        <View>
          <Image source={require("../assets/data.png")} className="h-16 w-16" />
          <Text className="font-medium mt-2">Buy data</Text>
        </View>
        <View>
          <Image
            source={require("../assets/airtime.png")}
            className="h-16 w-16"
          />
          <Text className="font-medium mt-2">Betting</Text>
        </View>
        <View>
          <Image
            source={require("../assets/airtime.png")}
            className="h-16 w-16"
          />
          <Text className="font-medium mt-2">Electricity</Text>
        </View>
      </View>
      <View className="flex-row justify-between p-4 mt-4">
        <Text className="text-lg font-semibold">Transations</Text>
        <Text className="font-medium pr-4">View all</Text>
      </View>
    </SafeAreaView>
  );
}
