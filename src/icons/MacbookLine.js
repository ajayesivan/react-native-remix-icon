import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMacbookLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4 5v11h16V5zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2zM1 19h22v2H1z" />
  </Svg>
);
export default SvgMacbookLine;
