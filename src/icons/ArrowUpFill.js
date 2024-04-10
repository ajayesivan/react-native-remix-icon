import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUpFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 12v8h-2v-8H4l8-8 8 8h-7z" />
    </Svg>
  );
}

export default SvgArrowUpFill;
