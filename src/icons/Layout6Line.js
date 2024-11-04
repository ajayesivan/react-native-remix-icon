import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayout6Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 21a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v16a1 1 0 01-1 1H3zm12-11H4v9h11v-9zm5 0h-3v9h3v-9zm0-5H4v3h16V5z" />
    </Svg>
  );
}

export default SvgLayout6Line;
