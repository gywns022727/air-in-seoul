import React from "react";
import styled from "styled-components";

export default function Pc() {
  return <Wrap>모바일로 접속해주세요.</Wrap>;
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
