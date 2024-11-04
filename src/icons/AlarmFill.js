import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAlarmFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 22a9 9 0 1 1 0-18 9 9 0 0 1 0 18m1-9V8h-2v7h5v-2zM1.747 6.283l3.536-3.536 1.414 1.414L3.16 7.697zm16.97-3.536 3.536 3.536-1.414 1.414-3.536-3.536z" />
  </Svg>
);
export default SvgAlarmFill;
