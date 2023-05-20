import React, { useContext } from "react";
import { ApiContext } from "../Context/ApiContext";

export default function PM10() {
  const PM10 = useContext(ApiContext);
  console.log(PM10);
  return <div>PM10</div>;
}
