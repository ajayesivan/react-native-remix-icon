import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProductHuntLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1.334-8a1.5 1.5 0 000-3H10.5v3h2.834zm0-5a3.5 3.5 0 010 7H10.5v3h-2V7h4.834z" />
    </Svg>
  );
}

export default SvgProductHuntLine;
