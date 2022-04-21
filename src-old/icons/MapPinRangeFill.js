import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapPinRangeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 17.938A8.001 8.001 0 0112 2a8 8 0 011 15.938v2.074c3.946.092 7 .723 7 1.488 0 .828-3.582 1.5-8 1.5s-8-.672-8-1.5c0-.765 3.054-1.396 7-1.488v-2.074zM12 12a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgMapPinRangeFill;
