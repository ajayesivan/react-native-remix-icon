import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNumber1(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z" />
    </Svg>
  );
}

export default SvgNumber1;
