import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgInboxFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m6 9a3 3 0 1 0 6 0h5V5H4v7z" />
  </Svg>
);
export default SvgInboxFill;
