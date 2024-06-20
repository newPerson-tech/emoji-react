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

  const handleVote = (emoji) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [emoji]: prevVotes[emoji] + 1,
    }));
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
    </div>
  );
};

export default EmojiVoting;
