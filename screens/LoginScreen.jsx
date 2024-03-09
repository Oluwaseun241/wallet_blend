import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useAuth } from "../services/auth";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_300Light,
  NunitoSans_900Black,
  NunitoSans_600SemiBold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const [emailIsValid, setEmailIsValid] = useState(false);

  const handleEmailChange = (text) => {
    const emailRegex = /\S+@\S+\.\S+/;
    setEmailIsValid(emailRegex.test(text));
  };

  const loginButtonDisabled = !emailIsValid || !passwordIsValid;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    navigation.navigate("Home");
    // try {
    //   const data = {
    //     email: email,
    //     password: password,
    //   };
    //   const response = await axios.post(
    //     "https://wallet-api.up.railway.app/api/auth/login",
    //     data
    //   );
    //
    //   if (response.data && response.data.token) {
    //     const token = response.data.token;
    //     console.log("Login successful:", token);
    //     login(token);
    //     navigation.navigate("Home");
    //   }
    // } catch (error) {
    //   // Handle login error, show a message to the user.
    //   console.error("Login failed:", error);
    //   setIsLoading(false);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_900Black,
    NunitoSans_700Bold,
    NunitoSans_300Light,
  });

  if (!fontsLoaded) {
    console.log("Fonts not loading");
  }

  return (
    <SafeAreaView className="flex-1 p-4 bg-white font-['NunitoSans_400Regular']">
      {isLoading ? (
        <View className="justify-center items-center">
          <ActivityIndicator size={"large"} color={"blue"} />
        </View>
      ) : (
        <View className="mt-4">
          <Text className="font-bold text-2xl">Lets Get You Started</Text>
          <Text className="text-xl pt-2">Login to your account</Text>
        </View>
      )}

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
          <TouchableOpacity className="rounded-full h-12 bg-[#0c2b97] hover:bg-[#2546b5]">
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
    </SafeAreaView>
  );
}
