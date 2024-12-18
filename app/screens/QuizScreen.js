import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const questions = [
  { question: "What is 2 + 2?", options: ["3", "4", "5"], correct: 1 },
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], correct: 2 },
];

export default QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <Text style={styles.score}>Your Score: {score}/{questions.length}</Text>
      ) : (
        <>
          <Text style={styles.question}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <Button key={index} title={option} onPress={() => handleAnswer(index)} />
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
