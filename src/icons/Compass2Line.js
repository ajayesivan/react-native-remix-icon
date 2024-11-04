import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCompass2Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m16.625 3.133-1.5 1.5A8 8 0 0 0 12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8a8 8 0 0 0-.633-3.125l1.5-1.5A9.95 9.95 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c1.668 0 3.242.41 4.625 1.133m1.739 1.089 1.414 1.414L12 13.414 10.586 12z" />
  </Svg>
);
export default SvgCompass2Line;
