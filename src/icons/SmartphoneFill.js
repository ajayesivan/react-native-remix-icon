import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSmartphoneFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m6 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
  </Svg>
);
export default SvgSmartphoneFill;
