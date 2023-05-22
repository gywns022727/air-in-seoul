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
          <span>{props.airName}</span>
        </div>
        <Range
          type="range"
          value={props.rangeValue}
          min={0}
          max={4}
          step="1"
          readOnly
        />
      </MainContent>
      <SubContent color={props.textColor}>
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
  align-items: center;
  color: ${(props) => props.color};
  @media screen and (max-width: 370px) {
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

const Range = styled.input`
  margin-top: 5px;
  width: 150px;
  height: 20px;
  -webkit-slider-thumb: ${(props) => props.color};
  @media (max-width: 280px) {
    width: 130px;
  }
`;
