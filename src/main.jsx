import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { DynamicList } from "./App.jsx";
import { DynamicList } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* This App is the primary initial location */}
    {/* <App /> */}

    {/* DynamicList is now the landing location of this application */}
    <DynamicList />

    {/* This is a challenge for practice the concept of props and child components */}
    {/* <MyProfile /> */}
  </StrictMode>
);
