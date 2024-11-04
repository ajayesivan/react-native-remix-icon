import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGenderlessFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 7.066V1h2v6.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934" />
  </Svg>
);
export default SvgGenderlessFill;
