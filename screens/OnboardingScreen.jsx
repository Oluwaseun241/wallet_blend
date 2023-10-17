import Onboarding from "react-native-onboarding-swiper";
import { Alert, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <Onboarding
      onDone={() => navigation.navigate("Login")}
      onSkip={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/onboarding-img1.png")} />,
          title: "Send money in minutes",
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
  );
};

export default OnboardingScreen;
