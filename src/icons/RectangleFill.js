import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRectangleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 4h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgRectangleFill;
