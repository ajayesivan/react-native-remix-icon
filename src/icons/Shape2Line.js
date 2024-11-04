import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShape2Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2zM4 4v2h2V4zm0 14v2h2v-2zM18 4v2h2V4zm0 14v2h2v-2z" />
  </Svg>
);
export default SvgShape2Line;
