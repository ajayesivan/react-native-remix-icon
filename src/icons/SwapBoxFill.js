import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwapBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3.003h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm12 4v2h-4v2h4v2l3.5-3-3.5-3zm-6 10v-2h4v-2h-4v-2l-3.5 3 3.5 3z" />
    </Svg>
  );
}

export default SvgSwapBoxFill;
