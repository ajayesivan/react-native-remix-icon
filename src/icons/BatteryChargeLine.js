import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBatteryChargeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M8 19H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6.625L8.458 7H4v10h4zm4.375 0 1.167-2H18V7h-4V5h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zM21 9h2v6h-2zm-9 2h3l-5 8v-6H7l5-8z" />
  </Svg>
);
export default SvgBatteryChargeLine;
