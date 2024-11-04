import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCloudWindyFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M14 19v-3.993H2.074a8 8 0 1 1 14.383-6.908A5.5 5.5 0 1 1 17.5 19zm-8 2h10v2H6zm-4-4h10v2H2z" />
  </Svg>
);
export default SvgCloudWindyFill;
