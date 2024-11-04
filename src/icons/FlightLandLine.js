import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlightLandLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.949 14.888a1.5 1.5 0 01-1.837 1.06L3.445 11.752a1 1 0 01-.74-.983l.09-5.403 1.449.388.915 3.351 5.095 1.366-.37-8.382 1.933.518 2.81 9.035 5.261 1.41a1.5 1.5 0 011.061 1.837zM4 19h16v2H4v-2z" />
    </Svg>
  );
}

export default SvgFlightLandLine;
