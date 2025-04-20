import "./App.css";

import { routesArray } from "./routes/routes.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter(routesArray);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
