import React, { useRef } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  BackHandler
} from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const webViewRef = useRef(null);

  const handleBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true;
    }
    return false;
  };

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () =>
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackPress
      );
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF2D55" barStyle="light-content" />
      <WebView
        ref={webViewRef}
        source={{
          uri: "https://jembee-kart-e94hdra6q-md-alim-ansar-s-projects.vercel.app/"
        }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
