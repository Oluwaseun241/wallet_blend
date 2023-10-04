import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import axios from "axios";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const onSubmit = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        "http://127.0.0.1:3000/api/auth/login",
        /* "https://wallet-api.up.railway.app/api/auth/login", */
        data
      );

      // Handle successful login, e.g., store user data or token, navigate to main app screen.
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle login error, show a message to the user.
      console.error("Login failed:", error);
    }
  };

  return (
    <SafeAreaProvider className="flex-1 pt-12 pl-4 bg-white">
      <View className="pt-12">
        <Text className="font-bold text-2xl">Lets Get You Started</Text>
        <Text className="text-xl pt-2">Login to your account</Text>
      </View>

      <View className="pt-12 pr-4">
        <Text className="text-xl font-semibold">Email</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Enter your email"
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />
        <Text className="text-xl font-semibold">Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter your password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />
        <View className="pt-4">
          <Text className="text-[#0c2b97] text-lg font-semibold">
            Forgot password?
          </Text>
        </View>
        <View className="pt-4">
          <TouchableOpacity className="rounded-full h-12 bg-[#0c2b97]">
            <Text
              onPress={onSubmit}
              className="text-white text-2xl mt-1 text-center font-normal"
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="pt-4 justify-center flex-row space-x-1">
        <Text className="text-gray-500 text-lg font-normal">
          Don't have an account?
        </Text>
        <Text
          onPress={() => navigation.navigate("Register")}
          className="text-[#0c2b97] text-lg font-bold"
        >
          SignUp
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
