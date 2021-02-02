import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDivideFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5 11h14v2H5v-2zm7-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgDivideFill;
