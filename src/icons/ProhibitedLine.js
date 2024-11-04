import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgProhibitedLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M7.094 5.68 18.32 16.906A8 8 0 0 0 7.094 5.68m9.812 12.64L5.68 7.094A8 8 0 0 0 16.906 18.32M4.929 4.929A9.97 9.97 0 0 1 12 2c5.523 0 10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12a9.97 9.97 0 0 1 2.929-7.071" />
  </Svg>
);
export default SvgProhibitedLine;
