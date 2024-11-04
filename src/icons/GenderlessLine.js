import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGenderlessLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13 7.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934V1h2zM12 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
  </Svg>
);
export default SvgGenderlessLine;
