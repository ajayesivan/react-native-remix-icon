import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShieldCrossFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3.783 2.826 12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M11 10H8v2h3v3h2v-3h3v-2h-3V7h-2z" />
  </Svg>
);
export default SvgShieldCrossFill;
