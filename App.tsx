import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PanGestureHandlerExample from "./components/PanGestureHandlerExample";
import Pinch from "./components/Pinch";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {/* <Navigation colorScheme={colorScheme} />
        <StatusBar /> */}
        {/* <PanGestureHandlerExample /> */}
        <Pinch />
      </View>
    );
  }
}
