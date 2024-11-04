import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHourglass2Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 2h16v4.46L13.537 12 20 17.54V22H4v-4.46L10.463 12 4 6.46zm8 8.683 6-5.143V4H6v1.54zm0 2.634L6 18.46V20h12v-1.54z" />
  </Svg>
);
export default SvgHourglass2Line;
