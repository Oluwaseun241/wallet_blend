import Onboarding from "react-native-onboarding-swiper";
import { Image } from "react-native";

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/Onboarding_screen_1.png")}
              className="h-84"
            />
          ),
          title: "Send money in minutes",
          subtitle: "Recipients will receive funds almost immediately",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/Onboarding_screen_2.png")}
              className="h-84"
            />
          ),
          title: "Safe and secure transfers",
          subtitle:
            "Your transactions and personal data are securely protected",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/Onboarding_screen_3.png")}
              className="h-96"
            />
          ),
          title: "Manage all your financial account all one app",
          subtitle:
            "With this app, you can connect all your financial accounts, including your bank accounts, credit cards, and investments",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
