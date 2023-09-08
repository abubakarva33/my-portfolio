import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./contexts/UserContext.jsx";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContext>
        <App />
      </UserContext>
    </Provider>
  </React.StrictMode>
);
