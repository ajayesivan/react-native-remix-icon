import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCalculatorLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m1 2v16h14V4zm2 2h10v4H7zm0 6h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v6h-2z" />
  </Svg>
);
export default SvgCalculatorLine;
