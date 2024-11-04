import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSortAsc = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m19 3 4 5h-3v12h-2V8h-3zm-5 15v2H3v-2zm0-7v2H3v-2zm-2-7v2H3V4z" />
  </Svg>
);
export default SvgSortAsc;
