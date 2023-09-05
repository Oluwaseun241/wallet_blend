import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function RegisterScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaProvider className="flex-1 pt-12 pl-4 bg-white">
      <View className="pt-12">
        <Text className="font-bold text-2xl">Tell Us About You</Text>
        <Text className="text-xl pt-2">Lets help you setup</Text>
      </View>

      <View className="pt-12 pr-4">
        <Text className="text-xl font-semibold">Name</Text>
        <TextInput
          placeholder="Enter your full name"
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />
        <Text className="text-xl font-semibold">Email</Text>
        <TextInput
          placeholder="Enter your email"
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />
        <Text className="text-xl font-semibold">Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter your password"
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />
        <Text className="text-xl font-semibold">Confirm Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm your password"
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />
        <View className="pt-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Verify")}
            className="rounded-full h-12 bg-blue-700"
          >
            <Text className="text-white text-2xl mt-1 text-center font-normal">
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="pt-4 justify-center flex-row space-x-1">
        <Text className="text-gray-500 text-lg font-normal">
          Already have an account?
        </Text>
        <Text
          className="text-blue-700 text-lg font-bold"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
