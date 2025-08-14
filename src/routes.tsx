import { createHashRouter } from "react-router-dom";
// import BuilderPageImport from "./pages/builder-page-IMPORT";
import Components from "./pages/components";

import BuilderPageProd from "./pages/builder-page-PROD";

export const router = createHashRouter([
  {
    path: "*",
    element: <BuilderPageProd />,
    // element: <BuilderPage />,
    // element: <BuilderPageImport />,
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
