import React, { useState } from "react";
import "./EmojiVoting.css";

const emojis = [
  { emoji: "😀", description: "Absolutely!" },
  { emoji: "😅", description: "Not sure" },
  { emoji: "😂", description: "No way!" },
  { emoji: "😍", description: "Definitely!" },
  { emoji: "🤔", description: "Less likely" },
];

const EmojiVoting = () => {
  const [votes, setVotes] = useState(() => {
    const initialVotes = {};
    emojis.forEach((item) => {
      initialVotes[item.emoji] = 0;
    });
    return initialVotes;
  });

  const [topEmoji, setTopEmoji] = useState("");

  const handleVote = (emoji) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [emoji]: prevVotes[emoji] + 1,
    }));
  };

  const findTopEmoji = () => {
    let maxVotes = 0;
    let topEmoji = "";
    for (const emoji in votes) {
      if (votes[emoji] > maxVotes) {
        maxVotes = votes[emoji];
        topEmoji = emoji;
      }
    }
    setTopEmoji(topEmoji);
  };

  return (
    <div id="emoji-voting">
      <div id="question" className="question">
        Are we going to meet for a reading club today?
      </div>
      {emojis.map((item) => (
        <div key={item.emoji} className="emoji-container">
          <span className="emoji" onClick={() => handleVote(item.emoji)}>
            {item.emoji}
          </span>
          <div className="description">{item.description}</div>
          <div className="counter">{votes[item.emoji]}</div>
        </div>
      ))}
      <div className="button-container">
        <button onClick={findTopEmoji}>Show Results</button>
      </div>
      {topEmoji && (
        <div className="result">
          <h2>Top Emoji: {topEmoji}</h2>
        </div>
      )}
    </div>
  );
};

export default EmojiVoting;
