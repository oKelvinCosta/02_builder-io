import { createHashRouter } from "react-router-dom";
import BuilderPage from "./pages/builder-page";

export const router = createHashRouter([
  {
    path: "*",
    element: <BuilderPage />,
  },
]);
