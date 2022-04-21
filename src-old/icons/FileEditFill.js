import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileEditFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 15.243v5.765a.993.993 0 01-.993.992H3.993A1 1 0 013 20.993V9h6a1 1 0 001-1V2h10.002c.551 0 .998.455.998.992v3.765l-8.999 9-.006 4.238 4.246.006L21 15.243zm.778-6.435l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM3 7l5-4.997V7H3z" />
    </Svg>
  );
}

export default SvgFileEditFill;
