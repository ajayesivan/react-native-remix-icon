import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVipFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1V4a1 1 0 011-1zm8 5.5v7h2v-7h-2zm-.285 0H8.606l-1.497 4.113L5.612 8.5H3.498l2.611 6.964h2L10.72 8.5zm5.285 5h1.5a2.5 2.5 0 000-5h-3.5v7h2v-2zm0-2v-1h1.5a.5.5 0 010 1h-1.5z" />
    </Svg>
  );
}

export default SvgVipFill;
