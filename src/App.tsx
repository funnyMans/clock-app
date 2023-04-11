import React from "react";

import "./App.css";
import AppWrapper from "./app/components/AppWrapper";
import { useRoutes } from "react-router-dom";
import { routerJSON } from "./routes";

function App() {
  const routeElement = useRoutes(routerJSON);
  return (
      <AppWrapper>{routeElement}</AppWrapper>
  );
}

export default App;
