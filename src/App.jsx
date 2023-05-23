import React from "react";
import { isBrowser } from "react-device-detect";
import GlobalStyle from "./components/GlobalStyle";
import Total from "./page/Total";
import Pc from "./page/Pc";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {isBrowser ? <Pc /> : <Total />}
    </div>
  );
}

export default App;
