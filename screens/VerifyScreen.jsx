import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";

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
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Image source={require("../assets/back.png")} className="w-10 h-12" />
        </TouchableOpacity>
        <View>
          <Text className="font-semibold text-2xl text-center">
            Verify Account
          </Text>
          <Text className="text-lg pt-2">
            Input the 5 digit code sent to your Email
          </Text>
        </View>
      </View>
      <View className="flex-row gap-4 pt-4 pl-4 mb-4">
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          className="h-14 w-14 pl-4 text-3xl border-2 border-gray-200 rounded-xl"
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          className="h-14 w-14 pl-4 text-3xl border-2 border-gray-200 rounded-xl"
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          className="h-14 w-14 pl-4 text-3xl border-2 border-gray-200 rounded-xl"
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          className="h-14 w-14 pl-4 text-3xl border-2 border-gray-200 rounded-xl"
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          className="h-14 w-14 pl-4 text-3xl border-2 border-gray-200 rounded-xl"
        />
      </View>
      <View className="pt-4 pr-4">
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="rounded-full h-12 bg-[#0c2b97]"
        >
          <Text className="text-white text-2xl mt-1 text-center font-normal">
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
