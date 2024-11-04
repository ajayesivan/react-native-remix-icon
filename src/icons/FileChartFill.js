import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileChartFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-5 5v10h2V7zm4 4v6h2v-6zm-8 2v4h2v-4z" />
  </Svg>
);
export default SvgFileChartFill;
