import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFriendicaLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 4v5h-6v2h6v6h-6v3h8a2 2 0 002-2V6a2 2 0 00-2-2h-2zm-2 0H6a2 2 0 00-2 2v12a2 2 0 002 2h2v-5h6v-2H8V7h6V4zM2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6z" />
    </Svg>
  );
}

export default SvgFriendicaLine;
