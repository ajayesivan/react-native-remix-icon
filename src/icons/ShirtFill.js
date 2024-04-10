import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShirtFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.998 4v7l5-2.5 5 2.5V4h3a1 1 0 011 1v16a1 1 0 01-1 1h-16a1 1 0 01-1-1V5a1 1 0 011-1h3zm5 4l-4.5-5h9l-4.5 5zm1 3.236l-1-.5-1 .5V20h2v-8.764zm2 2.764v2h4v-2h-4z" />
    </Svg>
  );
}

export default SvgShirtFill;
