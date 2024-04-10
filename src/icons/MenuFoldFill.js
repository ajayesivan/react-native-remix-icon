import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuFoldFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 18v2H3v-2h18zM7 3.5v10l-5-5 5-5zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z" />
    </Svg>
  );
}

export default SvgMenuFoldFill;
