import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { isEnvBrowser } from "./utils/misc";
import { debugData } from "./utils/debugData";

if (isEnvBrowser()) {
  const root = document.getElementById("root");

  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = "cover";
  root!.style.backgroundRepeat = "no-repeat";
  root!.style.backgroundPosition = "center";


  debugData([
    {
      action: "notify",
      data: {
        message: 'Ajoneuvo lukittu!',
        type: 'red',
        duration: 4000
      }
    }
  ]);
  
  setTimeout(() => {
    debugData([
      {
        action: "notify",
        data: {
          message: 'Ei ajoneuvoa!',
          type: 'default',
          duration: 4000
        }
      }
    ]);
  }, 2000)
  
  setTimeout(() => {
    debugData([
      {
        action: "notify",
        data: {
          message: 'Ajoneuvo avattu!',
          type: 'success',
          duration: 8000
        }
      }
    ]);
  }, 4000)
}

const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
