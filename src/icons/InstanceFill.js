import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgInstanceFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zM6.499 9.97 11 12.578v5.048h2v-5.048l4.501-2.606-1.002-1.731L12 10.845 7.501 8.24z" />
  </Svg>
);
export default SvgInstanceFill;
