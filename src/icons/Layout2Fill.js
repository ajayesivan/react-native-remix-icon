import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayout2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 3v18H4a1 1 0 01-1-1V4a1 1 0 011-1h7zm10 10v7a1 1 0 01-1 1h-7v-8h8zM20 3a1 1 0 011 1v7h-8V3h7z" />
    </Svg>
  );
}

export default SvgLayout2Fill;
