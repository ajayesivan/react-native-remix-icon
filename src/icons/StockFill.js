import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStockFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8.005 5.003h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm10 5h3v9h-3v3h-2v-3h-3v-9h3v-3h2z" />
  </Svg>
);
export default SvgStockFill;
