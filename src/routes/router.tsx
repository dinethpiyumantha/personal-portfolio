import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PUZZLE, ROUTE_ROOT } from "./paths";
import App from "@/App";
import HomePage from "@/pages/home-page";
import PuzzleGamePage from "@/pages/puzzle-game-page";

export const router = createBrowserRouter([
  {
    path: ROUTE_ROOT,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTE_PUZZLE,
        element: <PuzzleGamePage />,
      },
    ],
  },
]);
