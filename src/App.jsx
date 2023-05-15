import React from "react";
import axios from "axios";

function App() {
  axios({
    method: "get",
    url: "https://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureSidoLIst?serviceKey=Y3B8l56GfudHXlYGR67WwUIjqBTIac5s33DhjpdWXrjFSMf1uNRHM8EqvbpfZJ%2FQuRNtSA4LzLu39A3fQaTeCw%3D%3D&returnType=json&numOfRows=50&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&searchCondition=DAILY",
    responseType: "json",
  }).then(function (api) {
    const data = api.request.responseText;
    console.log(JSON.parse(data));
  });

  axios({
    method: "get",
    url: "https://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureLIst?serviceKey=Y3B8l56GfudHXlYGR67WwUIjqBTIac5s33DhjpdWXrjFSMf1uNRHM8EqvbpfZJ%2FQuRNtSA4LzLu39A3fQaTeCw%3D%3D&returnType=json&numOfRows=50&pageNo=1&itemCode=PM10&dataGubun=DAILY&searchCondition=WEEK",
    responseType: "json",
  }).then(function (api) {
    const local = api.request.responseText;
    console.log(JSON.parse(local));
  });
  return <div className="App"></div>;
}

export default App;
