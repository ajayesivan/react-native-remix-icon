import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLandscapeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m16 21-4.762-8.73L15 6l8 15zM8 10l6 11H2zM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" />
  </Svg>
);
export default SvgLandscapeFill;
