import { useState } from "react";
import Game from "./components/Game";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-2">
      <h1 className="text-primary text-center h1 fw-bolder display-5">
        Memory Game
      </h1>
      <Game />
    </div>
  );
}

export default App;
