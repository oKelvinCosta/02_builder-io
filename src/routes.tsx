import { createHashRouter } from "react-router-dom";
import BuilderPage from "./pages/builder-page";
import BuilderPageProd from "./pages/builder-page-PROD";
import Components from "./pages/components";

export const router = createHashRouter([
  {
    path: "*",
    // element: <BuilderPageProd />,
    element: <BuilderPage />,
  },
  {
    path: "prod",
    element: <BuilderPageProd />,
  },
  {
    path: "components",
    element: <Components />,
  },
]);
