// import React from "react";

// import { Web3ReactProvider } from "@web3-react/core";
// import { createRoot } from "react-dom/client";

// import App from "./App";
// import connectors from "./connectors";

// const root = createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <Web3ReactProvider connectors={connectors}>
//       <App />
//     </Web3ReactProvider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom";
// import { ReactDom, createRoot } from 'react-dom';



import { Web3ReactProvider } from "@web3-react/core";

import App from "./App";
import connectors from "./connectors";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Web3ReactProvider connectors={connectors}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);