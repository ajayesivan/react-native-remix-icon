import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextDirectionL = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5zM9 5a2 2 0 1 0 0 4zm8 12v-2.5l4 3.5-4 3.5V19H5v-2z" />
  </Svg>
);
export default SvgTextDirectionL;
