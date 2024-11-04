import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFullscreenExitLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18 7h4v2h-6V3h2zM8 9H2V7h4V3h2zm10 8v4h-2v-6h6v2zM8 15v6H6v-4H2v-2z" />
  </Svg>
);
export default SvgFullscreenExitLine;
