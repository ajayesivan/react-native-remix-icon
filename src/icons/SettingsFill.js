import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSettingsFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zm0 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </Svg>
);
export default SvgSettingsFill;
