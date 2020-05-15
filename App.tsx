import React from "react";
import {View, Text, StatusBar} from "react-native";

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Test</Text>
    </View>
  </>
);

export default App;
