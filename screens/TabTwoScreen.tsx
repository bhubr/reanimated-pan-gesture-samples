import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import Pinch from "../components/Pinch";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.gestureExample}>
        <Pinch />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  gestureExample: {
    borderColor: "red",
    borderWidth: 1,
  },
});
