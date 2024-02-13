import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/index.tsx";
import AuthPage from "./pages/Auth/index.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/auth" Component={AuthPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App