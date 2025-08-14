import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ScormProvider } from "./contexts/ScormContext";

function App() {
  return (<>
  <ScormProvider>
    <RouterProvider router={router} />
  </ScormProvider>
  </>);
}

export default App;
