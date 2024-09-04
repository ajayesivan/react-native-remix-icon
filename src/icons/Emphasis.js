import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEmphasis = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18 3v2H8v4h9v2H8v4h10v2H6V3z" />
  </Svg>
);
export default SvgEmphasis;
