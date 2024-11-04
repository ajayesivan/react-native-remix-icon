import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStockLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8.005 5.003h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm-3 2v5h4v-5zm13 3h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm-3 2v5h4v-5z" />
  </Svg>
);
export default SvgStockLine;
