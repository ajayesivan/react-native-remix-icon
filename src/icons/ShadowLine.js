import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShadowLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1zm15 9.56 2 2v2.88l-2-2zm0-2.12V8h2v3.44zM18 17v-.44l2 2V20h-1.44l-2-2H17a1 1 0 0 0 1-1m-3.56 1 2 2h-2.88l-2-2zm-5 0 2 2H8v-2zM4 16V4h12v12z" />
  </Svg>
);
export default SvgShadowLine;
