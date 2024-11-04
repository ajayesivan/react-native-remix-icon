import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPlayMiniLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9 8.482v7.036L15.03 12zM7.752 5.44l10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.13V5.87a.5.5 0 0 1 .752-.431" />
  </Svg>
);
export default SvgPlayMiniLine;
