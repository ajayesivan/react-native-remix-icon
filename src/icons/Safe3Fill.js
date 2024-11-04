import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSafe3Fill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h1v2h2v-2h12v2h2v-2h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm12.35 5.236 1.332-1.332 1.414 1.414-1.333 1.333a3.76 3.76 0 0 1 0 3.698l1.333 1.333-1.414 1.414-1.333-1.333a3.76 3.76 0 0 1-3.698 0l-1.333 1.333-1.414-1.414 1.333-1.333a3.76 3.76 0 0 1 0-3.698L8.904 8.318l1.414-1.414 1.333 1.332a3.76 3.76 0 0 1 3.698 0m-.613 2.026a1.75 1.75 0 1 0-2.474 2.475 1.75 1.75 0 0 0 2.474-2.475M5 8h2v7H5z" />
  </Svg>
);
export default SvgSafe3Fill;
