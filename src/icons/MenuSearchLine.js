import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuSearchLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.5 5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM10 8.5a5.5 5.5 0 1110.032 3.117l2.675 2.676-1.414 1.414-2.675-2.675A5.5 5.5 0 0110 8.5zM3 4h5v2H3V4zm0 7h5v2H3v-2zm18 7v2H3v-2h18z" />
    </Svg>
  );
}

export default SvgMenuSearchLine;
