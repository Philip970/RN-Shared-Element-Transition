import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";
import Animated from "react-native-reanimated";
import Header from "../components/Header";

type DetailScreenRouteProps = RouteProp<RootStackParamList, "Detail">;

type Props = {
  route: DetailScreenRouteProps;
};

const Detail = ({ route }: Props) => {
  const { item } = route.params;
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Header />
      <Animated.Image
        sharedTransitionTag={item.name}
        source={item.image}
        style={{ width: width, height: width }}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    bottom: 10,
    left: 10,
    right: 10,
    padding: 16,
    borderRadius: 20,
  },
  textName: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  textLocation: {
    color: "white",
    fontSize: 16,
  },
  textAbout: {
    color: "#323232",
    fontSize: 28,
    fontWeight: "bold",
    margin: 10,
  },
  text: {
    color: "#323232",
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: "justify",
  },
});
