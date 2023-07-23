import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import IPhone14Pro1 from "../components/IPhone14Pro1";
import PrimaryButton from "../components/PrimaryButton";
import { FontFamily, Color } from "../GlobalStyles";

const SplashScreen1 = () => {
  return (
    <View style={styles.splashScreen1}>
      <IPhone14Pro1
        clipPathGroup={require("../assets/clip-path-group.png")}
        iPhone14Pro1Position="absolute"
        iPhone14Pro1Top={0}
        iPhone14Pro1Left={0}
      />
      <Text style={styles.parentCoach}>{`Parent Coach`}</Text>
      <PrimaryButton
        primaryButtonPosition="absolute"
        primaryButtonTop={685}
        primaryButtonLeft={29}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentCoach: {
    position: "absolute",
    top: 378,
    left: 94,
    fontSize: 30,
    lineHeight: 28,
    // marginVertical: 5,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    textAlign: "left",
    width: 99,
  },
  splashScreen1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default SplashScreen1;
