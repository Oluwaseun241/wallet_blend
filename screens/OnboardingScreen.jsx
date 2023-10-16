import Onboarding from "react-native-onboarding-swiper";
import { Alert, Button, Image, StatusBar } from "react-native";

const OnboardingScreen = () => {
  return (
    <Onboarding
      showDone={false}
      onSkip={() => Alert.alert("Skipped")}
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
          subtitle: (
            <Button
              title={"Get Started"}
              className="rounded mt-4 text-blue-700"
              onPress={() => {
                Alert.alert("done");
                StatusBar.setBarStyle("default");
              }}
            />
          ),
        },
      ]}
    />
  );
};

export default OnboardingScreen;
