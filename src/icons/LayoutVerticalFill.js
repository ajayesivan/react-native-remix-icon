import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLayoutVerticalFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 14V7h2v10zm4-10h2v10h-2zm4 0h2v10h-2z" />
  </Svg>
);
export default SvgLayoutVerticalFill;
