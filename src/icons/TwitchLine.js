import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTwitchLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4.301 3h16.7v11.7l-4.7 4.7h-3.9l-2.5 2.4h-2.9v-2.4h-4V6.2zm.7 14.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5h-14zm10-9.4h2v4.7h-2zm0 0h2v4.7h-2zm-5 0h2v4.7h-2z" />
  </Svg>
);
export default SvgTwitchLine;
