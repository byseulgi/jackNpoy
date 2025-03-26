import { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { GameProvider } from "./context/GameContext";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import ResultScreen from "./screens/ResultScreen";

export default function App() {
  const [screenNum, setScreenNum] = useState(1);
  let screen;

  function changeScreenHandler(num) {
    setScreenNum(num);
  }

  if (screenNum === 1) {
    screen = <HomeScreen onScreenChange={changeScreenHandler} />;
  } else if (screenNum === 2) {
    screen = <GameScreen onScreenChange={changeScreenHandler} />;
  } else if (screenNum === 3) {
    screen = <ResultScreen onScreenChange={changeScreenHandler} />;
  }

  return (
    <GameProvider>
      <SafeAreaView style={styles.rootScreen}>
        <StatusBar />
        {screen}
      </SafeAreaView>
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
