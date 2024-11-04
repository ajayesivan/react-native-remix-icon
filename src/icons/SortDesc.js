import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSortDesc = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 4v12h3l-4 5-4-5h3V4zm-8 14v2H3v-2zm2-7v2H3v-2zm0-7v2H3V4z" />
  </Svg>
);
export default SvgSortDesc;
