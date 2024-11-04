import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLock2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 8h2a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2V7a6 6 0 1112 0v1zm-7 7.732V18h2v-2.268A2 2 0 0012 12a2 2 0 00-1 3.732zM16 8V7a4 4 0 00-8 0v1h8z" />
    </Svg>
  );
}

export default SvgLock2Fill;
