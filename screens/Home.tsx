import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../data";
import RenderItem from "../components/RenderItem";

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Popular Destination</Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <RenderItem item={item} index={index} />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  text: {
    fontSize: 34,
    marginHorizontal: 20,
    color: "#323232",
    fontWeight: "bold",
  },
});
