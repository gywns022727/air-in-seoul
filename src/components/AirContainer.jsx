import React from "react";
import styled from "styled-components";
import { Slider } from "@mui/material";

export default function AirContainer(props) {
  return (
    <Button>
      <MainContent>
        <div>
          <Icon src={props.icon} alt="Icon" />
          <span>{props.airName}</span>
        </div>
        <Slider
          aria-label="Default"
          valueLabelDisplay="auto"
          size="small"
          step={1}
          min={0}
          max={4}
          value={props.rangeValue}
          style={{
            color: props.textColor,
          }}
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
  position: relative;
  top: 10px;
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
    width: 150px;
    display: flex;
    align-items: center;
    > span {
      position: relative;
      top: 10px;
      padding-left: 10px;
      font-size: 12px;
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
