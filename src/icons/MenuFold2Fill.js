import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuFold2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3.5l5 5-5 5v-10zM21 20v-2H3v2h18zm0-7v-2h-9v2h9zm0-7V4h-9v2h9z" />
    </Svg>
  );
}

export default SvgMenuFold2Fill;
