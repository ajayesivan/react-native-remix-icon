import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlightTakeoffFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.949 10.112a1.5 1.5 0 01-1.06 1.837L5.221 16.147a1 1 0 01-1.133-.48L1.466 10.94l1.449-.388 2.468 2.445 5.095-1.365-4.51-7.074 1.931-.518 6.952 6.42 5.26-1.41a1.5 1.5 0 011.838 1.06zM4 19h16v2H4v-2z" />
    </Svg>
  );
}

export default SvgFlightTakeoffFill;
