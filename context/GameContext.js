import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();
export const useGame = () => useContext(GameContext);

const choices = ["Rock", "Paper", "Scissors"];

export const GameProvider = ({ children }) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playRound = (playerSelection) => {
    setPlayerChoice(playerSelection);

    // Ensure a new random choice every round
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    determineWinner(playerSelection, randomChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a Tie!");
    } else if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      setResult("You Win!");
    } else {
      setResult("You Lose!");
    }
  };

  return (
    <GameContext.Provider value={{ playerChoice, computerChoice, result, playRound }}>
      {children}
    </GameContext.Provider>
  );
};
