import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useGame } from "../context/GameContext";

const choices = [
  { name: "Rock", image: require("../assets/rock.jpg") },
  { name: "Paper", image: require("../assets/paper.jpg") },
  { name: "Scissors", image: require("../assets/scissors.jpg") },
];

const GameScreen = ({ onScreenChange }) => {
  const { playRound } = useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your move</Text>
      <View style={styles.buttonContainer}>
        {choices.map((choice) => (
          <TouchableOpacity
            key={choice.name}
            style={styles.button}
            onPress={() => {
              playRound(choice.name);
              onScreenChange(3); // Navigate to results
            }}
          >
            <Image source={choice.image} style={styles.image} />
            <Text style={styles.buttonText}>{choice.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa", // Light background for a clean look
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row", // Keep buttons in a row like before
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 100, // Keep it compact
    height: 100, // Square shape like before
  },
  image: {
    width: 75,
    height: 75,
    marginBottom: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default GameScreen;
