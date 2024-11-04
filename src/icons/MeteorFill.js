import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMeteorFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77zm-9 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10" />
  </Svg>
);
export default SvgMeteorFill;
