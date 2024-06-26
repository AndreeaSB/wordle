import { useContext } from "react";
import { AppContext } from "../App";

export default function GameOver() {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "You correctly guessed" : "You failed"}</h3>
      <h1>Correct word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>`You guessed in {currAttempt.attempt} attempts`</h3>
      )}
    </div>
  );
}
