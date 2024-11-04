import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShowersFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15 18H9v3H7v-3.252a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18H17v3.001h-2zm-4 2h2v3h-2z" />
  </Svg>
);
export default SvgShowersFill;
