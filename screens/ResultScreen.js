import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useGame } from "../context/GameContext";

const images = {
  Rock: require("../assets/rock.jpg"),
  Paper: require("../assets/paper.jpg"),
  Scissors: require("../assets/scissors.jpg"),
};

const ResultScreen = ({ onScreenChange }) => {
  const { playerChoice, computerChoice, result } = useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Result</Text>

      <View style={styles.resultContainer}>
        {/* Player's choice */}
        <View style={styles.choiceContainer}>
          <Text style={styles.label}>You:</Text>
          <Image source={images[playerChoice]} style={styles.image} />
          <Text style={styles.choiceText}>{playerChoice}</Text>
        </View>

        {/* Computer's choice */}
        <View style={styles.choiceContainer}>
          <Text style={styles.label}>Computer:</Text>
          <Image source={images[computerChoice]} style={styles.image} />
          <Text style={styles.choiceText}>{computerChoice}</Text>
        </View>
      </View>

      {/* Display Result */}
      <Text style={styles.resultText}>{result}</Text>

      {/* Buttons Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onScreenChange(2)}>
          <Text style={styles.buttonText}>Play Again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.homeButton]} onPress={() => onScreenChange(1)}>
          <Text style={styles.buttonText}>Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  resultContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 20,
  },
  choiceContainer: {
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 10,
  },
  choiceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  resultText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15, // Space between buttons
    marginTop: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  homeButton: {
    backgroundColor: "#FF5733", // Different color for Go Home
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultScreen;
