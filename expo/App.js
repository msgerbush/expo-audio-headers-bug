import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAudioPlayer } from "expo-audio";
import Constants from "expo-constants";

const audioFile = require("./assets/example-music-01.mp3");

export const getBaseUrl = () => {
  const debuggerHost = Constants.expoConfig?.hostUri;
  const localhost = debuggerHost?.split(":")[0];

  if (!localhost) {
    throw new Error(
      "Failed to get localhost. Please point to your production server."
    );
  }
  return `http://${localhost}:3000`;
};

export default function App() {
  const playerLocalFile = useAudioPlayer(audioFile);
  const playerFileWithAuth = useAudioPlayer({
    uri: `${getBaseUrl()}/example-music-01.mp3`,
    headers: {
      Authorization: "Bearer valid-token",
    },
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Play Local File" onPress={() => playerLocalFile.play()} />
      <Button
        title="Play File With Auth"
        onPress={() => playerFileWithAuth.play()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
