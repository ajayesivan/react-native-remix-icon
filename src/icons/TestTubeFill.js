import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTestTubeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 2v2h-1v14a4 4 0 01-8 0V4H7V2h10zm-4 13a1 1 0 100 2 1 1 0 000-2zm-2-3a1 1 0 100 2 1 1 0 000-2zm3-8h-4v4h4V4z" />
    </Svg>
  );
}

export default SvgTestTubeFill;
