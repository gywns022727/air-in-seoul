import React from "react";
import AirPollutantsData from "./api/AirPollutantsData";

function App() {
  // console.log("PM10: " + PM10);
  // console.log("PM25: " + PM25);
  // console.log("CO: " + CO);
  // console.log("NO2: " + NO2);
  // console.log("O3: " + O3);
  // console.log("SO2: " + SO2);
  // console.log("total: " + totlaData);
  return (
    <div className="App">
      <AirPollutantsData />
    </div>
  );
}

export default App;
