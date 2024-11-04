import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNumbersFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 18H4v-8h5zm6 0h-5V6h5zm6 0h-5V2h5zm1 4H3v-2h19z" />
  </Svg>
);
export default SvgNumbersFill;
