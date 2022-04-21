import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCommandFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 8h4V6.5a3.5 3.5 0 113.5 3.5H16v4h1.5a3.5 3.5 0 11-3.5 3.5V16h-4v1.5A3.5 3.5 0 116.5 14H8v-4H6.5A3.5 3.5 0 1110 6.5V8zM8 8V6.5A1.5 1.5 0 106.5 8H8zm0 8H6.5A1.5 1.5 0 108 17.5V16zm8-8h1.5A1.5 1.5 0 1016 6.5V8zm0 8v1.5a1.5 1.5 0 101.5-1.5H16zm-6-6v4h4v-4h-4z" />
    </Svg>
  );
}

export default SvgCommandFill;
