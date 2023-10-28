import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Onboarding from "react-native-onboarding-swiper";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Rounded, Next, Skip } from "../components/OnboardingComponent";
import {
  useFonts,
  NunitoSans_400Regular,
} from "@expo-google-fonts/nunito-sans";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoaded) {
    console.log("Heeeehee");
  }

  return (
    <SafeAreaProvider>
      <View className="flex-row p-4 bg-white font-[NunitoSans_400Regular]">
        <Image
          source={require("../assets/logo/walletblend-logo.png")}
          className="w-11 h-11"
        />
        <Text className="p-2 font-medium text-lg">WalletBlend</Text>
      </View>
      <Onboarding
        onDone={() => navigation.navigate("Login")}
        onSkip={() => navigation.navigate("Login")}
        bottomBarHeight={55}
        bottomBarColor="#fff"
        DotComponent={Rounded}
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        pages={[
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/onboarding-img1.png")} />,
            title: "Send money in minutes",
            titleStyles: {
              fontWeight: "600",
              fontSize: 30,
              //fontFamily: NunitoSans_400Regular,
            },
            subtitle: "Recipients will receive funds almost immediately",
            subTitleStyles: { fontSize: 16, fontWeight: "500" },
          },
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/onboarding-img2.png")} />,
            title: "Safe and secure transfers",
            titleStyles: { fontWeight: "600", fontSize: 30 },
            subtitle:
              "Your transactions and personal data are securely protected",
            subTitleStyles: { fontSize: 16, fontWeight: "500" },
          },
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/onboarding-img3.png")} />,
            title: "Manage all your financial account all one app",
            titleStyles: { fontWeight: "600", fontSize: 30 },
            subtitle:
              "With this app, you can connect all your financial accounts, including your bank accounts, credit cards, and investment",
            subTitleStyles: { fontSize: 16, fontWeight: "500" },
          },
        ]}
      />
    </SafeAreaProvider>
  );
};

export default OnboardingScreen;
