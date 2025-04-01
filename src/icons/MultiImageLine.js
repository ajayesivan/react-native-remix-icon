import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMultiImageLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M7 3a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 4H8V5h12v10h-2V8a1 1 0 0 0-1-1m-1 2v6.74l-4.509-4.1L4 18.632V9zm-4.491 5.36L16 18.442V19H6.537zM7 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </Svg>
);
export default SvgMultiImageLine;
