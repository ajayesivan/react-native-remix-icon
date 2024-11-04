import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwapBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.005 5.003v14h16v-14h-16zm-1-2h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm12 4l3.5 3-3.5 3v-2h-4v-2h4v-2zm-6 10l-3.5-3 3.5-3v2h4v2h-4v2z" />
    </Svg>
  );
}

export default SvgSwapBoxLine;
