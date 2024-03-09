import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import axios from "axios";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError(""); // Reset the error message if validation succeeds
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const onSubmit = async () => {
    validatePassword();

    if (passwordError) {
      return;
    }
    navigation.navigate("Verify");

    // try {
    //   const data = {
    //     name: name,
    //     email: email,
    //     password: password,
    //   };
    //
    //   const response = await axios.post(
    //     /* "http://127.0.0.1:3000/api/auth/register", */
    //     "https://wallet-api.up.railway.app/api/auth/register",
    //     data
    //   );
    //
    //   // Handle successful login, e.g., store user data or token, navigate to main app screen.
    //   console.log("Registration successful:", response.data);
    //   navigation.navigate("Verify");
    // } catch (error) {
    //   // Handle login error, show a message to the user.
    //   console.error("Registration failed:", error);
    // }
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-white">
      <View className="mt-4">
        <Text className="font-bold text-2xl">Tell Us About You</Text>
        <Text className="text-xl pt-2">Lets help you setup</Text>
      </View>

      <View className="pt-12 pr-4">
        <Text className="text-xl font-semibold">Name</Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder="Enter your full name"
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />
        <Text className="text-xl font-semibold">Email</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Enter your email"
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />
        <Text className="text-xl font-semibold">Password</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Enter your password"
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />

        {passwordError ? (
          <Text className="text-red-700">{passwordError}</Text>
        ) : null}

        <Text className="text-xl font-semibold">Confirm Password</Text>
        <TextInput
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={true}
          placeholder="Confirm your password"
          className="h-12 mt-4 mb-4 pl-4 text-xl border-2 border-gray-200 rounded-xl"
        />
        <View className="pt-4">
          <TouchableOpacity
            onPress={async () => {
              await onSubmit();
              /* navigation.navigate("Verify"); */
            }}
            className="rounded-full h-12 bg-[#0c2b97]"
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
          className="text-[#0c2b97] text-lg font-bold"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
}
