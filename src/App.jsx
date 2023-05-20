import React, { useEffect, useState } from "react";
import { isBrowser } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ApiContext } from "./Context/ApiContext";
import GlobalStyle from "./components/GlobalStyle";
import Total from "./page/Total";
import PM10 from "./page/PM10";
import PM25 from "./page/PM25";
import CO from "./page/CO";
import NO2 from "./page/NO2";
import O3 from "./page/O3";
import SO02 from "./page/SO02";
import Pc from "./page/Pc";
import NotFound from "./page/NotFound";

function App() {
  const [PM10Data, setPM10Data] = useState();
  const [PM25Data, setPM25Data] = useState();
  const [COData, setCOData] = useState();
  const [NO2Data, setNO2Data] = useState();
  const [O3Data, setO3Data] = useState();
  const [SO2Data, setSO2Data] = useState();
  const [totlaData, setTotalDate] = useState();

  useEffect(() => {
    axios
      .all([
        axios.get(
          "https://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureSidoLIst?serviceKey=" +
            process.env.REACT_APP_AIR_POLLUTANTS +
            "&returnType=json&numOfRows=50&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&searchCondition=DAILY"
        ),
        axios.get(
          "https://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureLIst?serviceKey=" +
            process.env.REACT_APP_TOTAL_DATA +
            "&returnType=json&numOfRows=50&pageNo=1&itemCode=PM25&dataGubun=DAILY&searchCondition=WEEK"
        ),
      ])
      .then(
        axios.spread(async function (air, total) {
          const airData = JSON.parse(air.request.response);
          const totalData = JSON.parse(total.request.response);
          setPM10Data(airData["response"]["body"]["items"]["0"]["pm10Value"]);
          setPM25Data(airData["response"]["body"]["items"]["0"]["pm25Value"]);
          setCOData(airData["response"]["body"]["items"]["0"]["coValue"]);
          setNO2Data(airData["response"]["body"]["items"]["0"]["no2Value"]);
          setO3Data(airData["response"]["body"]["items"]["0"]["o3Value"]);
          setSO2Data(airData["response"]["body"]["items"]["0"]["so2Value"]);
          setTotalDate(totalData["response"]["body"]["items"]["0"]["seoul"]);
        })
      );
  }, [
    setPM10Data,
    setPM25Data,
    setCOData,
    setNO2Data,
    setO3Data,
    setSO2Data,
    setTotalDate,
  ]);

  return (
    <div className="App">
      <GlobalStyle />
      <ApiContext.Provider
        value={{
          PM10Data,
          PM25Data,
          COData,
          NO2Data,
          O3Data,
          SO2Data,
          totlaData,
        }}
      >
        {isBrowser ? (
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Pc />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Total />} />
              <Route path="/pm10" element={<PM10 />} />
              <Route path="/pm25" element={<PM25 />} />
              <Route path="/co" element={<CO />} />
              <Route path="/no2" element={<NO2 />} />
              <Route path="/o3" element={<O3 />} />
              <Route path="/so02" element={<SO02 />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </ApiContext.Provider>
    </div>
  );
}

export default App;
