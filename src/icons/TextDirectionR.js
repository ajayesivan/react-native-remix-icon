import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextDirectionR = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5zM9 5a2 2 0 1 0 0 4zM7 17h12v2H7v2.5L3 18l4-3.5z" />
  </Svg>
);
export default SvgTextDirectionR;
