import React from "react";
import { Button, View } from "react-native";

const backgroundColor = (isLight) => (isLight ? "blue" : "lightblue");
const color = (isLight) => backgroundColor(!isLight);

const Rounded = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? "rgba(12, 43, 151, 1)" : "rgba(0, 0, 0, 0.3)";
  } else {
    backgroundColor = selected ? "#fff" : "rgba(255, 255, 255, 0.5)";
  }
  return (
    <View
      style={{
        width: 30,
        height: 10,
        marginHorizontal: 2,
        borderRadius: 20,
        backgroundColor,
      }}
    />
  );
};

const Next = ({ isLight, ...props }) => {
  <Button
    title={"Next"}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{}}
  />;
};

export default Rounded;
