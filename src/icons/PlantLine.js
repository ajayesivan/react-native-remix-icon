import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPlantLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5.998 2a7 7 0 0 1 6.197 3.741A6.49 6.49 0 0 1 17.498 3h3.5v2.5a6.5 6.5 0 0 1-6.5 6.5h-1.5v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-2h-2a7 7 0 0 1-7-7V2zm10 13h-8v5h8zm3-10h-1.5a4.5 4.5 0 0 0-4.5 4.5v.5h1.5a4.5 4.5 0 0 0 4.5-4.5zm-13-1h-2a5 5 0 0 0 5 5h2a5 5 0 0 0-5-5" />
  </Svg>
);
export default SvgPlantLine;
