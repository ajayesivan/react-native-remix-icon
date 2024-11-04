import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCalculatorFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 10v2h2v-2zm0 4v2h2v-2zm4-4v2h2v-2zm0 4v2h2v-2zm4-4v6h2v-6zM7 6v4h10V6z" />
  </Svg>
);
export default SvgCalculatorFill;
