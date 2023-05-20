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
      <Icon src={props.icon} alt="Icon" />
      {props.airName}
      {props.unit}
      {props.airData}
    </Button>
  );
}

const Button = styled.button``;

const Icon = styled.img`
  width: 32px;
`;
