import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArchiveStackFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 5h16V3H4v2zm16 4H4V7h16v2zM9 13h6v-2h6v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9h6v2z" />
    </Svg>
  );
}

export default SvgArchiveStackFill;
