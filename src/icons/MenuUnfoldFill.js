import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuUnfoldFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 18v2H3v-2h18zM17 3.5l5 5-5 5v-10zM12 11v2H3v-2h9zm0-7v2H3V4h9z" />
    </Svg>
  );
}

export default SvgMenuUnfoldFill;
