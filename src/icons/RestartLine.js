import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRestartLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18.537 19.567A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 10-2.46 5.772l.997 1.795z" />
    </Svg>
  );
}

export default SvgRestartLine;
