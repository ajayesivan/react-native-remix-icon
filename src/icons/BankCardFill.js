import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBankCardFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M22.005 10v10a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V10zm0-2h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7 8v2h4v-2z" />
  </Svg>
);
export default SvgBankCardFill;
