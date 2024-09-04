import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgThermometerFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20.557 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a4 4 0 0 1-2.387 1.147l-3.38.374-2.297 2.3a1 1 0 1 1-1.414-1.415l2.298-2.299.375-3.377A4 4 0 0 1 6.7 11.644l8.2-8.2a4 4 0 0 1 5.658 0m-9.193 9.192L9.95 14.05l2.121 2.122 1.414-1.415zm2.829-2.828-1.415 1.414 2.122 2.121 1.414-1.414zm2.828-2.829-1.414 1.414 2.121 2.122L19.142 9.1z" />
  </Svg>
);
export default SvgThermometerFill;
