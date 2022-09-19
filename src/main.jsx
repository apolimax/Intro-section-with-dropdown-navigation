import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SideBarProvider from "./context/sidebarContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SideBarProvider>
      <App />
    </SideBarProvider>
  </React.StrictMode>
);
