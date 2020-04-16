import axios from "axios";
import { useState } from "react";

const getInfo = async () => {
  let temp = await axios.get("https://api.covid19api.com/summary");

  return temp;
};

export default getInfo;
