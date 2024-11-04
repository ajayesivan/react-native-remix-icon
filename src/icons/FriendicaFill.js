import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFriendicaFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15 3v4.5H9v4h6v5H9V21h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
  </Svg>
);
export default SvgFriendicaFill;
