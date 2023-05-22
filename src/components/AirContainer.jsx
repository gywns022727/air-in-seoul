import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function AirContainer(props) {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(props.navigate);
      }}
    >
      <MainContent>
        <div>
          <Icon src={props.icon} alt="Icon" />
          {props.airName}
        </div>
        <Graph></Graph>
      </MainContent>
      <SubContent>
        <span>{props.unit}</span>
        <span>{props.airData}</span>
        <span>좋음</span>
      </SubContent>
    </Button>
  );
}

const Button = styled.button`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  width: 32px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubContent = styled.div`
  > span {
    padding: 0 5px;
  }
`;

const Graph = styled.div`
  margin-top: 5px;
  width: 180px;
  height: 20px;
  background-color: #60b6f1;
`;
