import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import jwtDecode from "jwt-decode";

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTY2NzcxNjAsInN1YiI6ImU1ZDc0MTZmLTAwMmYtNDUwNy04YTRhLTQ3ZWMwMWMyZTVlMyIsInVzZXJuYW1lIjoiVGVzdGluZyJ9.frXOgW1DPVsu3R_pKt7ci9szGRvdqTdRO7GDZ0kdl8A";

// Decode the token to access user information
const decodedToken = jwtDecode(authToken);
console.log(decodedToken);

// Access the user's username
const username = decodedToken.username;

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Hello {username}</Text>
      </View>
    </SafeAreaProvider>
  );
}
