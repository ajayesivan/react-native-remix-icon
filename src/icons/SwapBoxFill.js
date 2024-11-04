import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSwapBoxFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m12 4v2h-4v2h4v2l3.5-3zm-6 10v-2h4v-2h-4v-2l-3.5 3z" />
  </Svg>
);
export default SvgSwapBoxFill;
