import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import AirContainer from "../components/AirContainer";
import AirIcon from "../assets/images/air.png";
import Good from "../assets/images/good.png";
import Average from "../assets/images/average.png";
import Bad from "../assets/images/bad.png";
import VeryBad from "../assets/images/veryBad.png";
import PM10Icon from "../assets/images/pm10.png";
import PM25Icon from "../assets/images/pm25.png";
import COIcon from "../assets/images/co.png";
import NO2Icon from "../assets/images/no2.png";
import O3Icon from "../assets/images/o3.png";
import SO2Icon from "../assets/images/so2.png";
// import { Slider } from "material-ui-slider";
import { Slider } from "@material-ui/core";

export default function Total() {
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

  let totlaCudition = "";
  let rangeValue = 0;
  let color = "";
  if (totlaData <= 50) {
    totlaCudition = "좋음";
    rangeValue = 1;
    color = "#60b6f1";
  } else if (totlaData <= 100) {
    totlaCudition = "보통";
    rangeValue = 2;
    color = "#2ab57f";
  } else if (totlaData <= 150) {
    totlaCudition = "나쁨";
    rangeValue = 3;
    color = "#fab32a";
  } else if (totlaData > 150) {
    totlaCudition = "매우나쁨";
    rangeValue = 4;
    color = "#e51831";
  }

  return (
    <Wrap>
      <TotalContainer>
        <div className="totalGraphDiv">
          <div>
            <TotalImg src={AirIcon} alt="TotalIcon" />
            <span>서울 대기질 지수</span>
          </div>
          <Slider
            aria-label="Default"
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={4}
            value={rangeValue}
            style={{
              color: color,
            }}
          />
        </div>
        <div className="totalTextDiv">
          <AirCuditionText data={totlaData}>
            오늘의 <br /> 공기질
          </AirCuditionText>
          <AirCudition>{totlaCudition}</AirCudition>
          <ImgCudition
            src={
              totlaData <= 50
                ? Good
                : totlaData <= 100
                ? Average
                : totlaData <= 150
                ? Bad
                : totlaData > 150
                ? VeryBad
                : ""
            }
            alt="ImgCudition"
          ></ImgCudition>
        </div>
      </TotalContainer>
      <SubContainer>
        <AirContainer
          navigate={"/pm10"}
          icon={PM10Icon}
          airName={"미세먼지(PM10)"}
          unit={"ug/m3"}
          airData={PM10Data}
          cudition={
            PM10Data <= 30
              ? "좋음"
              : PM10Data <= 80
              ? "보통"
              : PM10Data <= 150
              ? "나쁨"
              : PM10Data > 150
              ? "매우나쁨"
              : ""
          }
          rangeValue={
            PM10Data <= 30
              ? 1
              : PM10Data <= 80
              ? 2
              : PM10Data <= 150
              ? 3
              : PM10Data > 150
              ? 4
              : 0
          }
          textColor={
            PM10Data <= 30
              ? "#60b6f1"
              : PM10Data <= 80
              ? "#2ab57f"
              : PM10Data <= 150
              ? "#fab32a"
              : PM10Data > 150
              ? "#e51831"
              : "#000"
          }
        ></AirContainer>
        <AirContainer
          navigate={"/pm25"}
          icon={PM25Icon}
          airName={"초미세먼지(PM2.5)"}
          unit={"ug/m3"}
          airData={PM25Data}
          cudition={
            PM25Data <= 15
              ? "좋음"
              : PM25Data <= 35
              ? "보통"
              : PM25Data <= 75
              ? "나쁨"
              : PM25Data > 75
              ? "매우나쁨"
              : ""
          }
          rangeValue={
            PM25Data <= 15
              ? 1
              : PM25Data <= 35
              ? 2
              : PM25Data <= 75
              ? 3
              : PM25Data > 75
              ? 4
              : 0
          }
          textColor={
            PM25Data <= 15
              ? "#60b6f1"
              : PM25Data <= 35
              ? "#2ab57f"
              : PM25Data <= 75
              ? "#fab32a"
              : PM25Data > 75
              ? "#e51831"
              : "#000"
          }
        ></AirContainer>
        <AirContainer
          navigate={"/co"}
          icon={COIcon}
          airName={"일산화탄소(CO)"}
          unit={"ppm"}
          airData={COData}
          cudition={
            COData <= 2.4
              ? "좋음"
              : COData <= 9.4
              ? "보통"
              : COData <= 15.4
              ? "나쁨"
              : COData > 15.4
              ? "매우나쁨"
              : ""
          }
          rangeValue={
            COData <= 2.4
              ? 1
              : COData <= 9.4
              ? 2
              : COData <= 15.4
              ? 3
              : COData > 15.4
              ? 4
              : 0
          }
          textColor={
            COData <= 2.4
              ? "#60b6f1"
              : COData <= 9.4
              ? "#2ab57f"
              : COData <= 15.4
              ? "#fab32a"
              : COData > 15.4
              ? "#e51831"
              : "#000"
          }
        ></AirContainer>
        <AirContainer
          navigate={"/no2"}
          icon={NO2Icon}
          airName={"이산화질소(NO2)"}
          unit={"ppm"}
          airData={NO2Data}
          cudition={
            NO2Data <= 0.03
              ? "좋음"
              : NO2Data <= 0.06
              ? "보통"
              : NO2Data <= 0.2
              ? "나쁨"
              : NO2Data > 0.2
              ? "매우나쁨"
              : ""
          }
          rangeValue={
            NO2Data <= 0.03
              ? 1
              : NO2Data <= 0.06
              ? 2
              : NO2Data <= 0.2
              ? 3
              : NO2Data > 0.2
              ? 4
              : 0
          }
          textColor={
            NO2Data <= 0.03
              ? "#60b6f1"
              : NO2Data <= 0.06
              ? "#2ab57f"
              : NO2Data <= 0.2
              ? "#fab32a"
              : NO2Data > 0.2
              ? "#e51831"
              : "#000"
          }
        ></AirContainer>
        <AirContainer
          navigate={"/o3"}
          icon={O3Icon}
          airName={"오존(O3)"}
          unit={"ppm"}
          airData={O3Data}
          cudition={
            O3Data <= 0.003
              ? "좋음"
              : O3Data <= 0.09
              ? "보통"
              : O3Data <= 0.15
              ? "나쁨"
              : O3Data > 0.15
              ? "매우나쁨"
              : ""
          }
          rangeValue={
            O3Data <= 0.003
              ? 1
              : O3Data <= 0.09
              ? 2
              : O3Data <= 0.15
              ? 3
              : O3Data > 0.15
              ? 4
              : 0
          }
          textColor={
            O3Data <= 0.003
              ? "#60b6f1"
              : O3Data <= 0.09
              ? "#2ab57f"
              : O3Data <= 0.15
              ? "#fab32a"
              : O3Data > 0.15
              ? "#e51831"
              : "#000"
          }
        ></AirContainer>
        <AirContainer
          navigate={"/so02"}
          icon={SO2Icon}
          airName={"아항산가스(SO2)"}
          unit={"ppm"}
          airData={SO2Data}
          cudition={
            SO2Data <= 0.02
              ? "좋음"
              : SO2Data <= 0.05
              ? "보통"
              : SO2Data <= 0.15
              ? "나쁨"
              : SO2Data > 0.15
              ? "매우나쁨"
              : ""
          }
          rangeValue={
            SO2Data <= 0.02
              ? 1
              : SO2Data <= 0.05
              ? 2
              : SO2Data <= 0.15
              ? 3
              : SO2Data > 0.15
              ? 4
              : 0
          }
          textColor={
            SO2Data <= 0.02
              ? "#60b6f1"
              : SO2Data <= 0.05
              ? "#2ab57f"
              : SO2Data <= 0.15
              ? "#fab32a"
              : SO2Data > 0.15
              ? "#e51831"
              : "#000"
          }
        ></AirContainer>
      </SubContainer>
      <ScreenLock></ScreenLock>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: #f7f7f7;
`;

const ScreenLock = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const TotalContainer = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  > .totalGraphDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > div {
      position: relative;
      top: 10px;
      display: flex;
      align-items: center;
      > span {
        font-size: 12px;
      }
    }
  }

  > .totalTextDiv {
    display: flex;
    align-items: center;
    > span {
      @media (max-width: 280px) {
        display: none;
      }
    }
  }
`;

const TotalImg = styled.img`
  margin-right: 10px;
  width: 25px;
`;

const AirCudition = styled.div`
  padding: 0 10px;
  font-size: 12px;
`;

const AirCuditionText = styled.span`
  font-size: 12px;
  color: ${(props) =>
    props.data <= 50
      ? "#60b6f1"
      : props.data <= 100
      ? "#2ab57f"
      : props.data <= 150
      ? "#fab32a"
      : props.data > 150
      ? "#e51831"
      : "#000"};
`;

const ImgCudition = styled.img`
  width: 35px;
`;

const SubContainer = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  > button {
    margin-top: 15px;
    height: 80px;
    border: none;
    border-radius: 3px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
    background-color: #fff;
  }
`;
