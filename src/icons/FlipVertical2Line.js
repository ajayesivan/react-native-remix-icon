import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlipVertical2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 19h14V5H5v14zM3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 6l4-4 4 4h-3v4h3l-4 4-4-4h3v-4H8z" />
    </Svg>
  );
}

export default SvgFlipVertical2Line;
