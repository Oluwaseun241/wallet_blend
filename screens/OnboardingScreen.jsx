import { SafeAreaProvider } from "react-native-safe-area-context";
import Onboarding from "react-native-onboarding-swiper";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import Rounded from "../components/OnboardingComponent";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaProvider>
      <View className="flex-row">
        <Image source={require("../assets/logo/walletblend-logo.png")} />
        <Text>WalletBlend</Text>
      </View>
      <Onboarding
        onDone={() => navigation.navigate("Login")}
        onSkip={() => navigation.navigate("Login")}
        DotComponent={Rounded}
        pages={[
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/onboarding-img1.png")} />,
            title: "Send money in minutes",
            titleStyles: { fontSize: 10 },
            subtitle: "Recipients will receive funds almost immediately",
          },
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/onboarding-img2.png")} />,
            title: "Safe and secure transfers",
            subtitle:
              "Your transactions and personal data are securely protected",
          },
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/onboarding-img3.png")} />,
            title: "Manage all your financial account all one app",
            subtitle:
              "With this app, you can connect all your financial accounts, including your bank accounts, credit cards, and investment",
          },
        ]}
      />
    </SafeAreaProvider>
  );
};

export default OnboardingScreen;
