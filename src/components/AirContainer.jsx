import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function AirContainer(props) {
  const navigate = useNavigate();
  console.log(typeof props.cudition);
  return (
    <Button
      onClick={() => {
        navigate(props.navigate);
      }}
    >
      <MainContent>
        <div>
          <Icon src={props.icon} alt="Icon" />
          <span>{props.airName}</span>
        </div>
        <Graph></Graph>
      </MainContent>
      <SubContent>
        <div>
          <span>{props.airData}</span>
          <span>{props.unit}</span>
        </div>
        <span>{props.cudition}</span>
      </SubContent>
    </Button>
  );
}

const Button = styled.button`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 280px) {
    padding: 5px 10px;
  }
`;

const Icon = styled.img`
  width: 32px;
  @media (max-width: 280px) {
    width: 30px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > div {
    > span {
      padding-left: 10px;
      @media (max-width: 280px) {
        font-size: 12px;
      }
    }
  }
`;

const SubContent = styled.div`
  display: flex;
  color: ${(props) =>
    props.cudition == "좋음"
      ? "#60b6f1"
      : props.cudition == "보통"
      ? "#2ab57f"
      : props.cudition == "나쁨"
      ? "#fab32a"
      : props.cudition == "매우나쁨"
      ? "#e51831"
      : "#000"};
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
  > div {
    > span {
      padding: 0 5px;
      @media (width: 280px) {
        font-size: 11px;
      }
    }
  }
  > span {
    padding: 0 5px;
    @media (width: 280px) {
      font-size: 11px;
    }
  }
`;

const Graph = styled.div`
  margin-top: 5px;
  width: 180px;
  height: 20px;
  background-color: #60b6f1;
  @media (max-width: 280px) {
    width: 150px;
  }
`;
