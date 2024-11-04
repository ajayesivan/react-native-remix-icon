import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBreadLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 3a4 4 0 00-2 7.465V19a3 3 0 003 3h12a3 3 0 003-3v-8.535A4 4 0 0019 3H5zm2 17a1 1 0 01-1-1V9.122l-.667-.236A2.001 2.001 0 016 5h13a2 2 0 01.667 3.886L19 9.122V19a1 1 0 01-1 1H7z" />
    </Svg>
  );
}

export default SvgBreadLine;
