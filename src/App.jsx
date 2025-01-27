import "./App.css";
import React from "react";
import { GlobalContext } from "./context/index";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  const user = {
    username: "Nadindra",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
