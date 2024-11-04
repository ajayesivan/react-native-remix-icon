import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatUnreadLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 7a3 3 0 100-6 3 3 0 000 6zm1 11V8.9a5.022 5.022 0 01-2 0V17H5.763L4 18.385V5h12.1a5.022 5.022 0 010-2H3a1 1 0 00-1 1v18.5L6.455 19H21a1 1 0 001-1z" />
    </Svg>
  );
}

export default SvgChatUnreadLine;
