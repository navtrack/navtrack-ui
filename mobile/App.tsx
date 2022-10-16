import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RecoilRoot, useRecoilState } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <InnerApp />
    </RecoilRoot>
  );
}

function InnerApp() {
  // const [x, setX] = useRecoilState(parsingAtom);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
