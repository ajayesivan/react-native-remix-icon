import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutHorizontalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 19h14V5H5v14zM3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm4 5h10V7H7v2zm10 4H7v-2h10v2zM7 17h10v-2H7v2z" />
    </Svg>
  );
}

export default SvgLayoutHorizontalLine;
