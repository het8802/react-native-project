import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PrimaryButton = ({
  primaryButtonPosition,
  primaryButtonTop,
  primaryButtonLeft,
}) => {
  const primaryButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", primaryButtonPosition),
      ...getStyleValue("top", primaryButtonTop),
      ...getStyleValue("left", primaryButtonLeft),
    };
  }, [primaryButtonPosition, primaryButtonTop, primaryButtonLeft]);

  return (
    <View style={[styles.primaryButton, primaryButtonStyle]}>
      <LinearGradient
        style={styles.primaryButtonChild}
        locations={[0, 0.99]}
        colors={["#8c52ff", "#303087"]}
      />
      <Text style={styles.letsGo}>Let’s Go</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryButtonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_7xl,
    backgroundColor: "transparent",
    position: "absolute",
  },
  letsGo: {
    top: "24.29%",
    left: "32.04%",
    fontSize: FontSize.size_7xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  primaryButton: {
    width: 334,
    height: 70,
  },
});

export default PrimaryButton;
