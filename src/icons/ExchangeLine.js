import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExchangeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-5-7h9v2h-4v3zm5-4v-3l5 5h-9v-2z" />
  </Svg>
);
export default SvgExchangeLine;
