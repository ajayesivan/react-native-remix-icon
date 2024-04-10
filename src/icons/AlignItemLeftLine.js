import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignItemLeftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 21V3h2v18H3zm6-6h6v3H9v-3zm-1-2a1 1 0 00-1 1v5a1 1 0 001 1h8a1 1 0 001-1v-5a1 1 0 00-1-1H8zm1-4h10V6H9v3zM7 5a1 1 0 011-1h12a1 1 0 011 1v5a1 1 0 01-1 1H8a1 1 0 01-1-1V5z" />
    </Svg>
  );
}

export default SvgAlignItemLeftLine;
