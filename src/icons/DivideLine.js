import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDivideLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 11h14v2H5v-2zm7-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgDivideLine;
