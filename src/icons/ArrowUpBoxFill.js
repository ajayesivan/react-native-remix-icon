import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUpBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zm8 3.343l5.95 5.95H13v5.364h-2v-5.364H6.05L12 6.343z" />
    </Svg>
  );
}

export default SvgArrowUpBoxFill;
