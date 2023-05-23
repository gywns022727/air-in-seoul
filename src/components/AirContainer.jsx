import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Slider } from "material-ui-slider";

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
        <Slider
          min={0}
          max={4}
          marks
          step={1}
          onChange={() => {}}
          disabled
          readOnly
          value={props.rangeValue}
          color={props.textColor}
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
