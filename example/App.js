/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import ImagedCard from "./lib/ImagedCard";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.containerGlue}>
          <ImagedCard stars={5} />
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
