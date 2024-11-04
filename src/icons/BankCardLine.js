import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBankCardLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3.005 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 8h-16v8h16zm0-2V5h-16v4zm-6 6h4v2h-4z" />
  </Svg>
);
export default SvgBankCardLine;
