import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBreadFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 7a4 4 0 014-4h2a4 4 0 00-2 7.465V19a3 3 0 003 3H6a3 3 0 01-3-3v-8.535A3.998 3.998 0 011 7zm7 15v-2a1 1 0 01-1-1V9.122l-.667-.236A2.001 2.001 0 017 5V3h12a4 4 0 012 7.465V19a3 3 0 01-3 3H8z" />
    </Svg>
  );
}

export default SvgBreadFill;
