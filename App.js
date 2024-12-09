import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import * as Speech from "expo-speech";

const App = () => {
  const [text, setText] = useState("");

  const speak = () => {
    if (text.trim()) {
      Speech.speak(text, {
        voice: "en-us-x-sfg#male_1-local",
        pitch: 1.0,
        rate: 0.75
      });
    } else {
      Speech.speak("Please enter some text", {
        voice: "en-us-x-sfg#male_1-local",
        pitch: 1.0,
        rate: 0.75
      });
    }
  };

  const stopSpeaking = () => {
    Speech.stop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Speech Example</Text>
      <TextInput
        style={styles.input}
        placeholder="Type text here"
        value={text}
        onChangeText={setText}
      />
      <View style={styles.buttonContainer}>
        <Button title="Speak" onPress={speak} />
        <Button title="Stop" onPress={stopSpeaking} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold"
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});

export default App;
