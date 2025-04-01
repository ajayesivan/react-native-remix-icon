import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAlarmAddFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 13a9 9 0 1 0 18 0 9 9 0 0 0-18 0M5.283 2.747 1.747 6.283l1.414 1.414L6.697 4.16zm16.97 3.536-3.535-3.536-1.415 1.414 3.536 3.536zM11 9h2v3h3v2h-3v3h-2v-3H8v-2h3z" />
  </Svg>
);
export default SvgAlarmAddFill;
