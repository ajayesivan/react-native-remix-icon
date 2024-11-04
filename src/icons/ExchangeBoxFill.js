import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExchangeBoxFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m9 6h-4v2h9l-5-5zm-5 4 5 5v-3h4v-2z" />
  </Svg>
);
export default SvgExchangeBoxFill;
