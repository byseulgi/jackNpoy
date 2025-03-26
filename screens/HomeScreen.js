import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";

const HomeScreen = ({ onScreenChange }) => {
  const handleStartPress = () => {
    Alert.alert(
      "Are you sure?",
      "Do you really want to play Jack N' Poy?",
      [
        { 
          text: "No", 
          onPress: () => {
            Alert.alert("Scared? 😂"); // Second prank alert
          } 
        },
        { text: "Yes", onPress: () => onScreenChange(2) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jack N' Poy</Text>
      <Image source={require("../assets/skoll.png")} style={styles.icon} />
      <TouchableOpacity style={styles.button} onPress={handleStartPress}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 20 
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
