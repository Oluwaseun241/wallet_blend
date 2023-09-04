import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
} from "react-native";

export default function VerifyScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaProvider className="pt-12 pl-4 bg-white">
      <View className="pt-12 pr-4 flex-row">
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Image source={require("../assets/back.png")} className="w-10 h-12" />
        </Pressable>
        <View>
          <Text className="font-semibold text-2xl text-center">
            Verify Account
          </Text>
          <Text className="text-lg pt-2">
            Input the 5 digit code sent to your Email
          </Text>
        </View>
      </View>
      <TextInput
        keyboardType="numeric"
        className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
      />
      <View className="pt-4 pr-4">
        <TouchableOpacity className="rounded-full h-12 bg-blue-700">
          <Text className="text-white text-2xl mt-1 text-center font-normal">
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
