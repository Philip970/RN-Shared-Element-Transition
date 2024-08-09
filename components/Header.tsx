import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../navigation/RootNavigator";
import Animated, { FadeIn } from "react-native-reanimated";

type Props = {};

const Header = (props: Props) => {
  const inset = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Animated.View
      entering={FadeIn.delay(400)}
      style={[
        styles.container,
        { top: Platform.OS === "ios" ? inset.top : 20 },
      ]}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={styles.chevron}
          source={require("../assets/chevron.png")}
        />
      </Pressable>
      <Image style={styles.chevron} source={require("../assets/like.png")} />
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    right: 20,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chevron: {
    width: 44,
    height: 44,
  },
});
