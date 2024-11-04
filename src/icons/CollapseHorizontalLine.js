import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCollapseHorizontalLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m13.5 12 4.95-4.95 1.414 1.415L17.328 11H23v2h-5.672l2.534 2.533-1.415 1.414zM1 13h5.67l-2.534 2.535 1.414 1.414L10.5 12 5.55 7.05 4.136 8.465 6.672 11H1z" />
  </Svg>
);
export default SvgCollapseHorizontalLine;
