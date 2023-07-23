import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Screen1 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.child} />
      <Button
        style={styles.primaryButton}
        title="Let’s Go"
        mode="contained"
        labelStyle={styles.primaryButtonBtn}
        contentStyle={styles.primaryButtonBtn1}
      >
        Let’s Go
      </Button>
      <Image
        style={[styles.logoIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/logo-icon.png")}
      />
      <Text style={styles.parentCoach} numberOfLines={2}>{`Parent
Coach`}</Text>
      <Text
        style={[styles.readyToSimplify, styles.readyToSimplifyPosition]}
        numberOfLines={3}
      >{`Ready to simplify your parenting journey?

`}</Text>
      <Text
        style={[styles.discoverExpertAdvice, styles.readyToSimplifyPosition]}
      >
        Discover expert advice and practical solutions at your fingertips.
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.clipPathGroup, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.clipPathGroup1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  primaryButtonBtn: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  primaryButtonBtn1: {
    left: 30,
    top: 613,
    height: 70,
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  readyToSimplifyPosition: {
    left: 34,
    textAlign: "left",
    position: "absolute",
  },
  child: {
    top: 0,
    left: 0,
    width: 393,
    position: "absolute",
    height: 852,
    backgroundColor: Color.white,
  },
  primaryButton: {
    width: 334,
    position: "absolute",
  },
  logoIcon: {
    height: "6.57%",
    width: "14.25%",
    top: "29.81%",
    right: "77.1%",
    bottom: "63.62%",
    left: "8.65%",
  },
  parentCoach: {
    top: 250,
    left: 102,
    fontSize: FontSize.size_11xl,
    lineHeight: 30,
    fontFamily: FontFamily.imprimaRegular,
    width: 120,
    height: 60,
    textAlign: "left",
    color: Color.gray,
    position: "absolute",
  },
  readyToSimplify: {
    top: 340,
    fontSize: 38,
    lineHeight: 43,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 350,
    height: 148,
  },
  discoverExpertAdvice: {
    top: 492,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 295,
    height: 98,
    color: Color.gray,
    left: 34,
  },
  vectorIcon: {
    height: "18.39%",
    width: "35.1%",
    top: "1.74%",
    right: "29.32%",
    bottom: "79.87%",
    left: "35.58%",
  },
  clipPathGroup: {
    height: "24.4%",
    width: "45.32%",
    top: "0%",
    right: "0%",
    bottom: "75.6%",
    left: "54.68%",
  },
  vectorIcon1: {
    height: "14.79%",
    width: "20.49%",
    top: "85.21%",
    right: "79.51%",
    bottom: "0%",
    left: "0%",
  },
  clipPathGroup1: {
    height: "25.73%",
    width: "47.69%",
    top: "87.41%",
    right: "46.91%",
    bottom: "-13.15%",
    left: "5.41%",
  },
  view: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
    backgroundColor: Color.white,
  },
});

export default Screen1;
