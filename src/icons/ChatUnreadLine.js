import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatUnreadLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6m1 11V8.9a5 5 0 0 1-2 0V17H5.763L4 18.385V5h12.1a5 5 0 0 1 0-2H3a1 1 0 0 0-1 1v18.5L6.455 19H21a1 1 0 0 0 1-1" />
  </Svg>
);
export default SvgChatUnreadLine;
