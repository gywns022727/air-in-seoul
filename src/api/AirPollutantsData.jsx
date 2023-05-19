import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AirPollutantsData() {
  const [totlaData, setTotalDate] = useState();
  const [PM10, setPM10] = useState();
  const [PM25, setPM25] = useState();
  const [CO, setCO] = useState();
  const [NO2, setNO2] = useState();
  const [O3, setO3] = useState();
  const [SO2, setSO2] = useState();

  useEffect(() => {
    axios
      .all([
        axios.get(process.env.REACT_APP_AIR_POLLUTANTS),
        axios.get(process.env.REACT_APP_TOTAL_DATA),
      ])
      .then(
        axios.spread(async function (air, total) {
          const airData = JSON.parse(air.request.response);
          const totalData = JSON.parse(total.request.response);
          setPM10(airData["response"]["body"]["items"]["0"]["pm10Value"]);
          setPM25(airData["response"]["body"]["items"]["0"]["pm25Value"]);
          setCO(airData["response"]["body"]["items"]["0"]["coValue"]);
          setNO2(airData["response"]["body"]["items"]["0"]["no2Value"]);
          setO3(airData["response"]["body"]["items"]["0"]["o3Value"]);
          setSO2(airData["response"]["body"]["items"]["0"]["so2Value"]);
          setTotalDate(totalData["response"]["body"]["items"]["0"]["seoul"]);
        })
      );
  }, [setPM10, setPM25, setCO, setNO2, setO3, setSO2, setTotalDate]);

  console.log("PM10: " + PM10);
  console.log("PM25: " + PM25);
  console.log("CO: " + CO);
  console.log("NO2: " + NO2);
  console.log("O3: " + O3);
  console.log("SO2: " + SO2);
  console.log("total: " + totlaData);
  return <div>AirPollutantsData</div>;
}
