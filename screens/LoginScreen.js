import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="flex-1 pt-12 pl-4 bg-white">
      <View className="pt-12">
        <Text className="font-bold text-2xl">Lets Get You Started</Text>
        <Text className="text-xl pt-2">Login to your account</Text>
      </View>

      <View className="pt-12 pr-4">
        <Text className="text-xl font-semibold">Email</Text>
        <TextInput
          placeholder="Enter your email"
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />
        <Text className="text-xl font-semibold">Password</Text>
        <TextInput
          placeholder="Enter your password"
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />
        <View className="pt-4">
          <Text className="text-blue-700 text-lg font-semibold">
            Forgot password?
          </Text>
        </View>
        <View className="pt-4">
          <TouchableOpacity className="rounded-full h-12 bg-blue-700">
            <Text className="text-white text-2xl mt-1 text-center font-normal">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="pt-4 justify-center flex-row space-x-1">
        <Text className="text-gray-500 text-lg font-normal">
          Don't have an account?
        </Text>
        <Text className="text-blue-700 text-lg font-bold">SignUp</Text>
      </View>
    </SafeAreaView>
  );
}
