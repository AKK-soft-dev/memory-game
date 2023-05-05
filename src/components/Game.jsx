import { useEffect, useRef, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import { generateRandomGifs, gifSources } from "../api/data";
import Modal from "./Modal";

// This value must be even if we check even number of cards is the same
// Otherwise, the game will last with inappropriate flipped cards
const defaultTotalChances = 32;

// Check if the last two flipped cards are the same
const calculateSameCards = (gifNames, flippedCards) => {
  return (
    gifNames[flippedCards[flippedCards.length - 2]] ===
    gifNames[flippedCards[flippedCards.length - 1]]
  );
};

export default function Game() {
  const [chances, setChances] = useState(defaultTotalChances);
  const [flippedCards, setFlippedCards] = useState([]);
  const [gifNames, setGifNames] = useState(generateRandomGifs());
  const [resourcesLoaded, setResourcesLoaded] = useState(0);

  // Here if we used state, it will lead to unnecessary re-renders
  // So I use ref instead and manipulate the DOM node imperatively
  const loadedResources = useRef(0);
  const progressBarRef = useRef(null);

  // const showModal = loadedResources < gifNames.length;

  const usedChances = defaultTotalChances - chances;

  const onResourceLoaded = () => {
    // Update the progress bar's width style as the resources are loaded
    loadedResources.current += 1;
    const loadedResourcesCount = loadedResources.current;
    const totalCardsCount = gifNames.length;
    if (loadedResourcesCount <= totalCardsCount) {
      const progress = (loadedResourcesCount / totalCardsCount) * 100;
      // console.log(progress);
      progressBarRef.current.style.width = `${progress}%`;
      progressBarRef.current["aria-valuenow"] = progress;
      console.log(progressBarRef.current["aria-valuenow"]);

      if (loadedResourcesCount === totalCardsCount) {
        setResourcesLoaded(true);
      }
    }
  };

  useEffect(() => {
    // If the last two flipped cards are not the same, remove them from flippedCards array
    // i.e unflip them
    if (
      flippedCards.length % 2 === 0 &&
      !calculateSameCards(gifNames, flippedCards)
    ) {
      // console.log(calculateSameCards(), flippedCards);
      setTimeout(() => {
        setFlippedCards((flippedCards) => flippedCards.slice(0, -2));
      }, 1000);
    }
  }, [flippedCards, gifNames]);

  const handleClick = (i) => {
    // Only allow to flip card when we have enough chances, and we have't flipped any card yet or the last two card are same, or the number of flipped cards is odd
    if (
      chances > 0 &&
      (flippedCards.length === 0 ||
        calculateSameCards(gifNames, flippedCards) ||
        flippedCards.length % 2 !== 0)
    ) {
      setChances((chances) => chances - 1);
      setFlippedCards((flippedCards) => [...flippedCards, i]);
    }
  };

  const resetGame = () => {
    setFlippedCards([]);
    setChances(defaultTotalChances);
    setGifNames(generateRandomGifs());
  };

  return (
    <>
      <Modal show={!resourcesLoaded} progressBarRef={progressBarRef} />
      <div className="row mx-0 row-gap-1 justify-content-between">
        {gifNames.map((gifName, index) => (
          <Card
            gifSrc={gifSources[gifName]}
            key={index}
            onClick={() => handleClick(index)}
            flip={flippedCards.length > 0 && flippedCards.includes(index)}
            onLoad={onResourceLoaded}
          />
        ))}
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-primary fs-6" onClick={resetGame}>
          New Game
        </button>
        {chances < defaultTotalChances && (
          <p className="text-info">
            You used <span className="fs-5">{usedChances}</span> chance
            {usedChances > 1 && "s"}
          </p>
        )}
        <p className="text-warning">
          Chances Left :{" "}
          <span
            className={`fs-5 ${
              chances < 5 ? "text-danger" : "text-warning-emphasis"
            }`}
          >
            {chances}
          </span>
        </p>
      </div>
    </>
  );
}
