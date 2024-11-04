import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutHorizontalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zm3 6V7h10v2H7zm0 4v-2h10v2H7zm10 4H7v-2h10v2z" />
    </Svg>
  );
}

export default SvgLayoutHorizontalFill;
