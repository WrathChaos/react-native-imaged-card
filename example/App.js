import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import ImagedCard from "react-native-imaged-card";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.containerGlue}>
          <ImagedCard
            stars={5}
            imageSource={require("./assets/chestnut.png")}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerGlue: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
