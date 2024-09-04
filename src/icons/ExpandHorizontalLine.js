import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExpandHorizontalLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m.5 12 4.95-4.95 1.414 1.414L4.328 11H10v2H4.328l2.533 2.533-1.414 1.414zM14 13h5.67l-2.534 2.535 1.414 1.414L23.5 12l-4.95-4.95-1.414 1.415L19.672 11H14z" />
  </Svg>
);
export default SvgExpandHorizontalLine;
