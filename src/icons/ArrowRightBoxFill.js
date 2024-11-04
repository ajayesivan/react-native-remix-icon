import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowRightBoxFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm13.657 9-5.95 5.95V13H6.345v-2h5.364V6.05z" />
  </Svg>
);
export default SvgArrowRightBoxFill;
