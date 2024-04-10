import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignCenter(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z" />
    </Svg>
  );
}

export default SvgAlignCenter;
