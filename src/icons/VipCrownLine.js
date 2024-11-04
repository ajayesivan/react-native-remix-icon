import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVipCrownLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.005 19h20v2h-20v-2zm0-14l5 3.5 5-6.5 5 6.5 5-3.5v12h-20V5zm2 3.841V15h16V8.841l-3.42 2.394-4.58-5.955-4.58 5.955-3.42-2.394z" />
    </Svg>
  );
}

export default SvgVipCrownLine;
