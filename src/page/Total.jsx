import React, { useContext } from "react";
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
import { ApiContext } from "../Context/ApiContext";

export default function Total() {
  const { PM10Data, PM25Data, COData, NO2Data, O3Data, SO2Data, totlaData } =
    useContext(ApiContext);

  let totlaCudition = "";
  if (totlaData <= 50) {
    totlaCudition = "좋음";
  } else if (totlaData <= 100) {
    totlaCudition = "보통";
  } else if (totlaData <= 150) {
    totlaCudition = "나쁨";
  } else if (totlaData > 150) {
    totlaCudition = "매우나쁨";
  }

  return (
    <Wrap>
      <TotalContainer>
        <div className="totalGraphDiv">
          <div>
            <TotalImg src={AirIcon} alt="TotalIcon" />
            <span>서울 대기질 지수</span>
          </div>
          <Graph></Graph>
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
        ></AirContainer>
        <AirContainer
          navigate={"/pm25"}
          icon={PM25Icon}
          airName={"초미세먼지(PM2.5)"}
          unit={"ug/m3"}
          airData={PM25Data}
        ></AirContainer>
        <AirContainer
          navigate={"/co"}
          icon={COIcon}
          airName={"일산화탄소(CO)"}
          unit={"ppm"}
          airData={COData}
        ></AirContainer>
        <AirContainer
          navigate={"/no2"}
          icon={NO2Icon}
          airName={"이산화질소(NO2)"}
          unit={"ppm"}
          airData={NO2Data}
        ></AirContainer>
        <AirContainer
          navigate={"/o3"}
          icon={O3Icon}
          airName={"오존(O3)"}
          unit={"ppm"}
          airData={O3Data}
        ></AirContainer>
        <AirContainer
          navigate={"/so02"}
          icon={SO2Icon}
          airName={"아항산가스(SO2)"}
          unit={"ppm"}
          airData={SO2Data}
        ></AirContainer>
      </SubContainer>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: #fafafa;
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
      > span {
        font-size: 12px;
      }
    }
  }

  > .totalTextDiv {
    display: flex;
    align-items: center;
    > span {
      @media (width: 280px) {
        display: none;
      }
    }
  }
`;

const TotalImg = styled.img`
  margin-right: 10px;
  width: 25px;
`;

const Graph = styled.div`
  margin-top: 5px;
  width: 180px;
  height: 20px;
  background-color: #60b6f1;
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
