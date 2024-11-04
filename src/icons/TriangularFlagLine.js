import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTriangularFlagLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 5.144V16h12.34L6 5.144zM4 2.932c0-.86 1.015-1.32 1.66-.75l15.99 14.067c.692.61.262 1.751-.66 1.751H6v4H4V2.932z" />
    </Svg>
  );
}

export default SvgTriangularFlagLine;
