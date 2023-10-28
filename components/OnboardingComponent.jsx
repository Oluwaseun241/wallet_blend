import React from "react";
import { Button, View, Image } from "react-native";

const backgroundColor = (isLight) => (isLight ? "blue" : "lightblue");
const color = (isLight) => backgroundColor(!isLight);

export const Rounded = ({ isLight, selected }) => {
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

export const Next = ({ isLight, ...props }) => {
  return (
    <Button
      title={"Next"}
      buttonStyle={{
        width: 70,
      }}
      containerViewStyle={{
        width: 90,
      }}
      {...props}
    />
  );
};

export const Skip = ({ isLight, ...props }) => {
  return (
    <Button
      title="Skip"
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
      }}
      {...props}
    />
  );
};
