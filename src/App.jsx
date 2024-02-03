import React from "react";
import Menu from "./Menu.jsx";
import Authentication from "./Authentication.jsx";
import OfflineGame from "./OfflineGame.jsx";
import SelectSide from "./SelectSide.jsx";
import SoloGame from "./SoloGame.jsx";
import SnakeGame from "./snake/SnakeGame.jsx";
import StoneGame from "./stone/StoneGame.jsx";
import SelectTicTacToe from "./SelectTicTacToe.jsx";
import Quiz from "./quiz/Quiz.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/select",
    element: <SelectSide />,
  },
  {
    path: "/offline",
    element: <OfflineGame />,
  },
  {
    path: "/solo",
    element: <SoloGame />,
  },
  {
    path: "/selectTicTacToe",
    element: <SelectTicTacToe />
  },
  {
    path: "/quiz",
    element: <Quiz />
  },
  {
    path: "/snake", 
    element: <SnakeGame />
  },
  {
    path: "/stone",
    element: <StoneGame />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
