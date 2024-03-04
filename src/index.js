import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; // Importing Provider
import { store } from "./redux/Store"; // Importing Store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Wrapping App component with Provider and passing the store */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
