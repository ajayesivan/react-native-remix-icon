import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPulseFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m9 7.539 6 14L18.66 13H23v-2h-5.66L15 16.461l-6-14L5.34 11H1v2h5.66z" />
  </Svg>
);
export default SvgPulseFill;
