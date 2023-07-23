import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IPhone14Pro1 = ({
  clipPathGroup,
  iPhone14Pro1Position,
  iPhone14Pro1Top,
  iPhone14Pro1Left,
}) => {
  const iPhone14Pro1Style = useMemo(() => {
    return {
      ...getStyleValue("position", iPhone14Pro1Position),
      ...getStyleValue("top", iPhone14Pro1Top),
      ...getStyleValue("left", iPhone14Pro1Left),
    };
  }, [iPhone14Pro1Position, iPhone14Pro1Top, iPhone14Pro1Left]);

  return (
    <View style={[styles.iphone14Pro1, iPhone14Pro1Style]}>
      <View style={styles.iphone14Pro1Child} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Text
        style={[styles.readyToSimplify, styles.readyToSimplifyFlexBox]}
      >{`Ready to simplify your parenting journey?

`}</Text>
      <Text
        style={[styles.discoverExpertAdvice, styles.readyToSimplifyFlexBox]}
      >
        Discover expert advice and practical solutions at your fingertips.
      </Text>
      <Image
        style={[styles.clipPathGroup, styles.iconLayout]}
        contentFit="cover"
        source={clipPathGroup}
      />
      <Image
        style={[styles.logoIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/logo-icon1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  readyToSimplifyFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  iphone14Pro1Child: {
    top: 0,
    left: 0,
    backgroundColor: Color.darkslategray,
    position: "absolute",
    height: 852,
    width: 393,
  },
  vectorIcon: {
    height: "21.95%",
    width: "52.93%",
    top: "8.33%",
    right: "25.95%",
    bottom: "69.72%",
    left: "21.12%",
  },
  vectorIcon1: {
    height: "17.99%",
    width: "34.64%",
    top: "7.04%",
    right: "49.54%",
    bottom: "74.97%",
    left: "15.81%",
  },
  readyToSimplify: {
    top: 439,
    left: 29,
    fontSize: FontSize.size_21xl,
    lineHeight: 44,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 350,
    height: 148,
  },
  discoverExpertAdvice: {
    top: 587,
    left: 30,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    width: 320,
    height: 98,
  },
  clipPathGroup: {
    height: "25.73%",
    width: "47.69%",
    top: "9.24%",
    right: "16.94%",
    bottom: "65.02%",
    left: "35.37%",
  },
  logoIcon: {
    height: "6.79%",
    width: "14.54%",
    top: "43.21%",
    right: "78.08%",
    bottom: "50%",
    left: "7.38%",
  },
  iphone14Pro1: {
    backgroundColor: Color.white,
    overflow: "hidden",
    height: 852,
    width: 393,
  },
});

export default IPhone14Pro1;
