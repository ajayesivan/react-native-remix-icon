import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAedFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm10 8l-5 7v-5H8l5-7v5h3z" />
    </Svg>
  );
}

export default SvgAedFill;
