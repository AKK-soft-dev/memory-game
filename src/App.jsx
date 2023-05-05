import Game from "./components/Game";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-2">
      <h1 className="text-primary text-center fw-bolder display-5">
        Memory Game
      </h1>
      <Game />
      <small
        className="copyright text-secondary user-select-none"
        style={{ "--bs-text-opacity": 0.2 }}
      >
        &copy;2023 Aung Ko Ko
      </small>
    </div>
  );
}

export default App;
