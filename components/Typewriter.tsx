"use client";
import React, { useState, useEffect } from "react";

interface Props {
  inputText: string;
  element: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  speed?: number;
}

const Typewriter = ({ speed, element, inputText }: Props) => {
  const [displayText, setDisplayText] = useState("");
  const [text, setText] = useState(inputText);
  const [index, setIndex] = useState(0);

  if (inputText !== text) {
    setText(inputText);
    setIndex(0);
    setDisplayText("");
  }

  useEffect(() => {
    if (index < text.length) {
      const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, speed || 100);

      return () => clearInterval(intervalId);
    }
  }, [index, text, speed]);

  switch (element) {
    case "h1":
      return <h1>{displayText}</h1>;
    case "h2":
      return <h2>{displayText}</h2>;
    case "h3":
      return <h3>{displayText}</h3>;
    case "h4":
      return <h4>{displayText}</h4>;
    case "span":
      return <span>{displayText}</span>;
    case "p":
      return <p>{displayText}</p>;
  }
};

export default Typewriter;
