import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSkipUpLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m12 13.914 4.793 4.793 1.414-1.414L12 11.086l-6.207 6.207 1.414 1.414zM6 7h12v2H6z" />
  </Svg>
);
export default SvgSkipUpLine;
